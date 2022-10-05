package com.ssafy.nopo.api.service;

import com.amazonaws.AmazonClientException;
import com.amazonaws.SdkClientException;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.transfer.*;
import com.amazonaws.services.s3.transfer.TransferManagerBuilder;
import com.ssafy.nopo.common.exception.CustomException;
import com.ssafy.nopo.common.exception.ErrorCode;
import com.ssafy.nopo.db.entity.ReviewImg;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Component
@Slf4j
public class S3Service {
    @Value("${cloud.aws.s3.bucket.url}")
    private String defaultUrl;

    @Value("${cloud.aws.s3.bucket.name}") // 프로퍼티에서 cloud.aws.s3.bucket에 대한 정보를 불러옴
    public String bucket;

    private final AmazonS3Client amazonS3Client;

    public String upload(MultipartFile uploadFile) throws IOException {

        String origName = uploadFile.getOriginalFilename();
        String url;
        try {
            // 확장자를 찾기 위한 코드
            final String ext = origName.substring(origName.lastIndexOf('.'));
            // 파일이름 암호화
            final String saveFileName = getUuid() + ext;
            // 파일 객체 생성
            // System.getProperty => 시스템 환경에 관한 정보를 얻을 수 있다. (user.dir = 현재 작업 디렉토리를 의미함)
            File file = new File(System.getProperty("user.dir") + saveFileName);
            // 파일 변환
            uploadFile.transferTo(file);
            // S3 파일 업로드
            uploadOnS3(saveFileName, file);
            // 주소 할당
            url = defaultUrl + saveFileName;
            // 파일 삭제
            file.delete();
        } catch (IOException e) {
            throw new CustomException(ErrorCode.IMAGE_UPLOAD_ERROR);
        }
        return url;
    }

    public List<String> uploadImges(List<MultipartFile> multipartFile) throws IOException {
        log.info("이미지 업로드 시작");
        List<String> imgUrlList = new ArrayList<>();

        // forEach 구문을 통해 multipartFile로 넘어온 파일들 하나씩 fileNameList에 추가
        for (MultipartFile file : multipartFile) {
            String url = upload(file);
            log.info("이미지 url = "+ url);
            imgUrlList.add(url);
        }
        return imgUrlList;
    }

    private static String getUuid() {
        return UUID.randomUUID().toString().replaceAll("-", "");
    }

    private void uploadOnS3(final String findName, final File file) {
//        // AWS S3 전송 객체 생성
//        final TransferManager transferManager = TransferManagerBuilder.standard()
//                .withS3Client(this.amazonS3Client).build();
//        // 요청 객체 생성
//        final PutObjectRequest request = new PutObjectRequest(bucket, findName, file);
//        // 업로드 시도
//        final Upload upload =  transferManager.upload(request);
//
//        try {
//            upload.waitForCompletion();
//        } catch (AmazonClientException | InterruptedException amazonClientException) {
//            amazonClientException.printStackTrace();
//        }
        amazonS3Client.putObject(new PutObjectRequest(bucket, findName, file).withCannedAcl(CannedAccessControlList.PublicRead));
//        return amazonS3Client.getUrl(bucket, findName).toString();
    }
    public void delete(String imageUrl) {
        try {
            final String deleteFileName = imageUrl.substring(imageUrl.lastIndexOf('/')+1);
            amazonS3Client.deleteObject(this.bucket, deleteFileName);
        } catch (SdkClientException e) {
            e.printStackTrace();
        }
    }

    public void deleteAll(List<ReviewImg> imgList) {
        try {
            imgList.forEach(i -> delete(i.getUrl()));
        } catch (SdkClientException e) {
            e.printStackTrace();
        }
    }
}
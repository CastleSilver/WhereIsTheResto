package com.ssafy.nopo.api.controller;

import com.ssafy.nopo.api.request.ReviewReq;
import com.ssafy.nopo.api.response.BaseResponseEntity;
import com.ssafy.nopo.api.response.ReviewRes;
import com.ssafy.nopo.api.service.JwtService;
import com.ssafy.nopo.api.service.ReviewService;
import com.ssafy.nopo.api.service.S3Service;
import com.ssafy.nopo.common.exception.CustomException;
import com.ssafy.nopo.common.exception.ErrorCode;
import com.ssafy.nopo.common.exception.InvalidApproachException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping("/review")
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;
    private final JwtService jwtService;
    private final S3Service s3Service;

    @PostMapping(consumes = { MediaType.MULTIPART_FORM_DATA_VALUE },
                produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<?> createReview(HttpServletRequest request,
                                          @RequestPart(required = false) List<MultipartFile> multipartFiles,
                                          @RequestPart ReviewReq reviewReq) throws IOException {
        /**
         * @Method Name : createReview
         * @Method 설명 : 리뷰를 등록한다.
         */
        log.info("리뷰 정보 등록 시작");
        if (!jwtService.isValidUser())
            throw new CustomException(ErrorCode.JWT_TOKEN_WRONG_SIGNATURE);
        log.info("유저 아이디 얻어오기");
        String userId = jwtService.getUserId();
        if (userId == null || "".equals(userId)) {
            throw new CustomException(ErrorCode.LOGIN_NOT_FOUND_ID);
        } else if (reviewReq.getContent() == null || "".equals(reviewReq.getContent())) {
            throw new CustomException(ErrorCode.CONTENT_INPUT_ERROR);
        } else if (0 == reviewReq.getRating()) {
            throw new CustomException(ErrorCode.RATING_INPUT_ERROR);
        }
        log.info("리뷰 등록");
        List<String> imgUrlList = new ArrayList<>();
        if (!multipartFiles.isEmpty()) {
            imgUrlList = s3Service.uploadImges(multipartFiles);
        }
        reviewService.createReview(reviewReq, imgUrlList, userId);
        return ResponseEntity.ok().body(new BaseResponseEntity(200, "Success"));
    }

    @GetMapping("/{reviewId}")
    public ResponseEntity<?> getReview(@PathVariable int reviewId) {
        /**
         * @Method Name : getReview
         * @Method 설명 : 리뷰 id로 리뷰 단일 조회
         */
        ReviewRes reviewRes = reviewService.findByReviewId(reviewId);
        return ResponseEntity.ok().body(reviewRes);
    }

    @DeleteMapping("/{reviewId}")
    public ResponseEntity<?> deleteReview(HttpServletRequest request, @PathVariable int reviewId) {
        /**
         * @Method Name : deleteReview
         * @Method 설명 : 리뷰 id로 리뷰 삭제
         */
        if (!jwtService.isValidUser())
            throw new CustomException(ErrorCode.JWT_TOKEN_WRONG_SIGNATURE);
        log.info("유저 아이디 얻어오기");
        String userId = jwtService.getUserId();
        if (userId == null || "".equals(userId))
            throw new CustomException(ErrorCode.LOGIN_NOT_FOUND_ID);

        reviewService.deleteReview(reviewId, userId);
        return ResponseEntity.ok().body(new BaseResponseEntity(200, "Success"));
    }

    @PatchMapping("/{reviewId}")
    public ResponseEntity<?> updateReview(HttpServletRequest request,
                                          @PathVariable int reviewId,
                                          @RequestBody ReviewReq reviewReq) {
        /**
         * @Method Name : updateReview
         * @Method 설명 : 리뷰 id로 리뷰 수정
         */
        if (!jwtService.isValidUser())
            throw new CustomException(ErrorCode.JWT_TOKEN_WRONG_SIGNATURE);
        log.info("유저 아이디 얻어오기");
        String userId = jwtService.getUserId();
        if (userId == null || "".equals(userId))
            throw new CustomException(ErrorCode.LOGIN_NOT_FOUND_ID);

        reviewService.modifyReview(reviewId, reviewReq, userId);
        return ResponseEntity.ok().body(new BaseResponseEntity(200, "Success"));
    }
}
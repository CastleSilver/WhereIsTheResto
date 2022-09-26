package com.ssafy.nopo.api.service;

import com.ssafy.nopo.api.request.ReviewReq;
import com.ssafy.nopo.api.response.ReviewRes;
import com.ssafy.nopo.common.exception.CustomException;
import com.ssafy.nopo.common.exception.ErrorCode;
import com.ssafy.nopo.db.entity.OldRestaurant;
import com.ssafy.nopo.db.entity.Review;
import com.ssafy.nopo.db.entity.ReviewImg;
import com.ssafy.nopo.db.entity.User;
import com.ssafy.nopo.db.repository.RestoRepository;
import com.ssafy.nopo.db.repository.ReviewImgRepository;
import com.ssafy.nopo.db.repository.UserRepository;
import com.ssafy.nopo.db.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService{
    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final RestoRepository restoRepository;
    private final ReviewImgRepository imgRepository;
    private S3Service s3Service;
    @Override
    public void createReview(ReviewReq reviewReq, List<String> imgUrls, String userId) {
        User user = userRepository.findById(userId).orElseThrow(
                () -> new CustomException(ErrorCode.NOT_FOUND_USER_INFO));
        OldRestaurant resto = restoRepository.findById(reviewReq.getRestoId()).orElseThrow(
                () -> new CustomException(ErrorCode.NOT_FOUND_RESTO_INFO));
        if(reviewRepository.findByRestoIdAndUserId(resto, user).isPresent())
            throw new CustomException(ErrorCode.ALREADY_POST_REVIEW_ERROR);
        Review review = Review.builder()
                .content(reviewReq.getContent())
                .rating(reviewReq.getRating())
                .user(user)
                .resto(resto)
                .build();
        reviewRepository.save(review);

        if(imgUrls != null && !imgUrls.isEmpty()){
            for(String url : imgUrls){
                ReviewImg img = ReviewImg.builder()
                        .review(review)
                        .url(url)
                        .build();
                imgRepository.save(img);
            }
        }
    }
    @Transactional
    @Override
    public ReviewRes findByReviewId(int reviewId) {
        Review review = reviewRepository.findById(reviewId).orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_REVIEW_INFO));

        // 이미지 목록 불러오기
        List<String> imageUrl = imgRepository.findAllByReviewId(review)
                                .stream()
                                .map(ReviewImg::getUrl)
                                .collect(Collectors.toList());

        String regdate = review.getRegdate().toLocalDate().toString();
        return new ReviewRes(reviewId, imageUrl, review.getContent(), review.getRating(), regdate, review.getUser().getNickname());
    }

    @Transactional
    @Override
    public void modifyReview(int reviewId, ReviewReq reviewReq, String userId) {
        Review review = reviewRepository.findById(reviewId).orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_REVIEW_INFO));
        if(!review.getUser().getId().equals(userId))
            throw new CustomException(ErrorCode.REVIEW_UPDATE_WRONG_ACCESS);
        review.update(review.getContent(), review.getRating());
    }

    @Transactional
    @Override
    public void deleteReview(int reviewId, String userId) {
        Review review = reviewRepository.findById(reviewId).orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_REVIEW_INFO));
        if(!review.getUser().getId().equals(userId))
            throw new CustomException(ErrorCode.REVIEW_DELETE_WRONG_ACCESS);
        reviewRepository.deleteById(reviewId);
        s3Service.deleteAll(review.getImgList());
    }
}

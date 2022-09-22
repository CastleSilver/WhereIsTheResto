package com.ssafy.nopo.api.service;

import com.ssafy.nopo.api.request.ReviewReq;
import com.ssafy.nopo.api.response.ReviewRes;
import com.ssafy.nopo.db.entity.Review;
import com.ssafy.nopo.db.repository.ReviewImgQuerydslRepository;
import com.ssafy.nopo.db.repository.ReviewImgRepository;
import com.ssafy.nopo.db.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService{
    private final ReviewRepository reviewRepository;
    private final ReviewImgQuerydslRepository imgQuerydslRepository;
    @Override
    public void createReview(ReviewReq reviewReq, String userId) {
        Review review = Review.builder()
                .content(reviewReq.getContent())
                .rating(reviewReq.getRating())
                //회원 추가 필요
                //노포 추가 필요
                .build();
        reviewRepository.save(review);
    }

    @Override
    public ReviewRes findByReviewId(int reviewId) {
        Review review = reviewRepository.findById(reviewId).get();
        // 이미지 목록 불러오기
        List<String> imageUrl = imgQuerydslRepository.findReviewImgUrlByRevieId(reviewId);
        String regdate = review.getRegdate().toLocalDate().toString();
        return new ReviewRes(reviewId, imageUrl, review.getContent(), review.getRating(), regdate, "닉네임 들어가야함");
    }

    @Transactional
    @Override
    public void modifyReview(int reviewId, ReviewReq reviewReq) {
        // null 예외 처리 필요
        Review review = reviewRepository.findById(reviewId).get();
//            Board entity = boardRepository.findById(id).orElseThrow(() -> new CustomException(ErrorCode.POSTS_NOT_FOUND));
        review.update(review.getContent(), review.getRating());
    }

    @Override
    public void deleteReview(int reviewId) {
        reviewRepository.deleteById(reviewId);
    }

    @Override
    public ReviewRes findByRestoIdAndUserId(int restoId, String userId) {
        return null;
    }

    @Override
    public List<ReviewRes> getReviewListByRestoId(int restoId) {

        return null;
    }
}

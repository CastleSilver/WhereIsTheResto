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

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService{
    private final ReviewRepository reviewRepository;
    private final ReviewImgQuerydslRepository imgQuerydslRepository;
    @Override
    public void createReview(ReviewReq reviewReq) {
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

    @Override
    public void modifyReview(ReviewReq reviewReq) {
        Review review = Review.builder()
                .content(reviewReq.getContent())
                .rating(reviewReq.getRating())
                //회원 추가 필요
                //노포 추가 필요
                .build();
        reviewRepository.save(review);
    }

    @Override
    public void deleteReview(int reviewId) {
        reviewRepository.deleteById(reviewId);
    }

    @Override
    public List<ReviewRes> getReviewListByRestoId(int restoId) {

        return null;
    }
}

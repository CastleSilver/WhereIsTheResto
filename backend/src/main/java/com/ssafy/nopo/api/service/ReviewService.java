package com.ssafy.nopo.api.service;

import com.ssafy.nopo.api.request.ReviewReq;
import com.ssafy.nopo.api.response.ReviewRes;

import java.util.List;

public interface ReviewService {
    void createReview(ReviewReq reviewReq, String userId);
    ReviewRes findByReviewId(int reviewId);
    void modifyReview(int reviewId, ReviewReq reviewReq);
    void deleteReview(int reviewId);
    ReviewRes findByRestoIdAndUserId(int restoId, String userId);
    List<ReviewRes> getReviewListByRestoId(int restoId);
}

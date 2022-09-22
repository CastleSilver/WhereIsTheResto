package com.ssafy.nopo.api.service;

import com.ssafy.nopo.api.request.ReviewReq;
import com.ssafy.nopo.api.response.ReviewRes;

import java.util.List;

public interface ReviewService {
    void createReview(ReviewReq reviewReq);
    ReviewRes findByReviewId(int reviewId);
    void modifyReview(ReviewReq reviewReq);
    void deleteReview(int reviewId);
    List<ReviewRes> getReviewListByRestoId(int restoId);
}

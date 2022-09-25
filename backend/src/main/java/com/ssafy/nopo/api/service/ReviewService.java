package com.ssafy.nopo.api.service;

import com.ssafy.nopo.api.request.ReviewReq;
import com.ssafy.nopo.api.response.ReviewRes;

import java.util.List;

public interface ReviewService {
    void createReview(ReviewReq reviewReq, List<String> imgUrls, String userId);
    ReviewRes findByReviewId(int reviewId);
    void modifyReview(int reviewId, ReviewReq reviewReq, String userId);
    void deleteReview(int reviewId, String userId);
}

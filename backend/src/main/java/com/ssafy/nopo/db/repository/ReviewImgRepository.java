package com.ssafy.nopo.db.repository;

import com.ssafy.nopo.db.entity.Review;
import com.ssafy.nopo.db.entity.ReviewImg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewImgRepository extends JpaRepository<ReviewImg, Integer> {
    List<ReviewImg> findAllByReviewId(int reviewId);

}

package com.ssafy.nopo.db.repository;

import com.ssafy.nopo.db.entity.ReviewImg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewImgRepository extends JpaRepository<ReviewImg, Integer> {
}

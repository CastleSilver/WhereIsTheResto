package com.ssafy.nopo.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.nopo.api.response.ReviewRes;
import com.ssafy.nopo.db.entity.QReview;
import com.ssafy.nopo.db.entity.QReviewImg;
import com.ssafy.nopo.db.entity.Review;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ReviewQuerydslRepository {

    QReview qReview = QReview.review;
    private final JPAQueryFactory jpaQueryFactory;

//    public List<Review> findReviewListByRestoId(int restoId) {
//        return jpaQueryFactory
//                .select(qReview)
//                .from(qReview)
//                .where(qReview.)
//                .fetch();
//    }
}

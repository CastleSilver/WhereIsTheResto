package com.ssafy.nopo.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.nopo.db.entity.QReviewImg;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ReviewImgQuerydslRepository {
    QReviewImg qReviewImg = QReviewImg.reviewImg;
    private final JPAQueryFactory jpaQueryFactory;
    public List<String> findReviewImgUrlByRevieId(int reviewId) {
        return jpaQueryFactory
                .select(qReviewImg.url)
                .from(qReviewImg)
                .where(qReviewImg.review.id.eq(reviewId))
                .fetch();
    }
}

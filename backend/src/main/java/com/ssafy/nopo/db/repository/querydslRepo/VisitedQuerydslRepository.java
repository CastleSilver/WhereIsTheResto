package com.ssafy.nopo.db.repository.querydslRepo;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.nopo.db.entity.QVisited;
import com.ssafy.nopo.db.entity.Visited;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class VisitedQuerydslRepository {

    private final JPAQueryFactory jpaQueryFactory;

    QVisited qVisited = QVisited.visited;

    public Visited findByUserIdAndRestoId(String userId, int restoId) {
        return jpaQueryFactory.selectFrom(qVisited)
                .where(qVisited.user.id.eq(userId).and(qVisited.resto.id.eq(restoId))).fetchOne();
    }
}

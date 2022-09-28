package com.ssafy.nopo.db.repository.querydslRepo;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.nopo.db.entity.Liked;
import com.ssafy.nopo.db.entity.QLiked;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class LikedQuerydslRepository {

    private final JPAQueryFactory jpaQueryFactory;

    QLiked qLiked = QLiked.liked;

    public Liked findByUserIdAndRestoId(String userId, int restoId) {
        return jpaQueryFactory.selectFrom(qLiked)
                .where(qLiked.user.id.eq(userId).and(qLiked.resto.id.eq(restoId))).fetchOne();
    }

    public void deleteByUserIdAndRestoId(String userId, int restoId) {
        jpaQueryFactory.delete(qLiked)
                .where(qLiked.user.id.eq(userId).and(qLiked.resto.id.eq(restoId))).execute();
    }

    public int countRestoId(int restoId) {
        return jpaQueryFactory.selectFrom(qLiked)
                .where(qLiked.resto.id.eq(restoId)).fetch().size();
    }
}

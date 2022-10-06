package com.ssafy.nopo.db.repository.querydslRepo;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.nopo.db.entity.Liked;
import com.ssafy.nopo.db.entity.OldRestaurant;
import com.ssafy.nopo.db.entity.QLiked;
import com.ssafy.nopo.db.entity.QOldRestaurant;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Calendar;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class RestoQuerydslRepository {

    private final JPAQueryFactory jpaQueryFactory;
    QOldRestaurant resto = QOldRestaurant.oldRestaurant;
    QLiked liked = QLiked.liked;

    public List<OldRestaurant> orderByLiked(){
        return jpaQueryFactory.select(resto).from(resto, liked).
                orderBy(resto.likedList.size().intValue().desc()).limit(20).fetch();
    }
}

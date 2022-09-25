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
    private final LikedQuerydslRepository likedQuerydslRepository;
    static Calendar now = Calendar.getInstance();
    QOldRestaurant resto = QOldRestaurant.oldRestaurant;
    QLiked liked = QLiked.liked;

//    public List<OldRestaurant> orderByLiked(){
//        return jpaQueryFactory.select(resto).from(resto.likedList, liked).
//                orderBy(jpaQueryFactory.select(liked).where(liked.resto.id.eq(resto.id)).fetch().size()).fetch();
//    }
}

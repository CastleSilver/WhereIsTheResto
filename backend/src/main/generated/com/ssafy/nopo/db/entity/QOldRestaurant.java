package com.ssafy.nopo.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QOldRestaurant is a Querydsl query type for OldRestaurant
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QOldRestaurant extends EntityPathBase<OldRestaurant> {

    private static final long serialVersionUID = -2055827070L;

    public static final QOldRestaurant oldRestaurant = new QOldRestaurant("oldRestaurant");

    public final StringPath address = createString("address");

    public final StringPath grade = createString("grade");

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final ListPath<Liked, QLiked> likedList = this.<Liked, QLiked>createList("likedList", Liked.class, QLiked.class, PathInits.DIRECT2);

    public final NumberPath<Double> locationX = createNumber("locationX", Double.class);

    public final NumberPath<Double> locationY = createNumber("locationY", Double.class);

    public final StringPath menu1 = createString("menu1");

    public final StringPath menu2 = createString("menu2");

    public final StringPath phoneNumber = createString("phoneNumber");

    public final StringPath restoAge = createString("restoAge");

    public final StringPath restoName = createString("restoName");

    public final StringPath sectors = createString("sectors");

    public final NumberPath<Integer> terrace = createNumber("terrace", Integer.class);

    public final StringPath thumbnail = createString("thumbnail");

    public final ListPath<Visited, QVisited> visitedList = this.<Visited, QVisited>createList("visitedList", Visited.class, QVisited.class, PathInits.DIRECT2);

    public QOldRestaurant(String variable) {
        super(OldRestaurant.class, forVariable(variable));
    }

    public QOldRestaurant(Path<? extends OldRestaurant> path) {
        super(path.getType(), path.getMetadata());
    }

    public QOldRestaurant(PathMetadata metadata) {
        super(OldRestaurant.class, metadata);
    }

}


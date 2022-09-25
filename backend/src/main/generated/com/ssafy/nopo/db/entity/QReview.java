package com.ssafy.nopo.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QReview is a Querydsl query type for Review
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QReview extends EntityPathBase<Review> {

    private static final long serialVersionUID = -1589890982L;

    public static final QReview review = new QReview("review");

    public final StringPath comment = createString("comment");

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final ListPath<ReviewImg, QReviewImg> imgList = this.<ReviewImg, QReviewImg>createList("imgList", ReviewImg.class, QReviewImg.class, PathInits.DIRECT2);

    public final NumberPath<Double> rating = createNumber("rating", Double.class);

    public final DateTimePath<java.time.LocalDateTime> regdate = createDateTime("regdate", java.time.LocalDateTime.class);

    public QReview(String variable) {
        super(Review.class, forVariable(variable));
    }

    public QReview(Path<? extends Review> path) {
        super(path.getType(), path.getMetadata());
    }

    public QReview(PathMetadata metadata) {
        super(Review.class, metadata);
    }

}


package com.ssafy.nopo.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QLiked is a Querydsl query type for Liked
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QLiked extends EntityPathBase<Liked> {

    private static final long serialVersionUID = -1442192789L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QLiked liked = new QLiked("liked");

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final QOldRestaurant resto;

    public final QUser user;

    public QLiked(String variable) {
        this(Liked.class, forVariable(variable), INITS);
    }

    public QLiked(Path<? extends Liked> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QLiked(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QLiked(PathMetadata metadata, PathInits inits) {
        this(Liked.class, metadata, inits);
    }

    public QLiked(Class<? extends Liked> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.resto = inits.isInitialized("resto") ? new QOldRestaurant(forProperty("resto")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user")) : null;
    }

}


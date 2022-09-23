package com.ssafy.nopo.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QVisited is a Querydsl query type for Visited
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QVisited extends EntityPathBase<Visited> {

    private static final long serialVersionUID = 1619794536L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QVisited visited = new QVisited("visited");

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final QOldRestaurant nopo;

    public final QUser user;

    public QVisited(String variable) {
        this(Visited.class, forVariable(variable), INITS);
    }

    public QVisited(Path<? extends Visited> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QVisited(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QVisited(PathMetadata metadata, PathInits inits) {
        this(Visited.class, metadata, inits);
    }

    public QVisited(Class<? extends Visited> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.nopo = inits.isInitialized("nopo") ? new QOldRestaurant(forProperty("nopo")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user")) : null;
    }

}


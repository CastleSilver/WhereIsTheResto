package com.ssafy.nopo.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QLoggedIn is a Querydsl query type for LoggedIn
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QLoggedIn extends EntityPathBase<LoggedIn> {

    private static final long serialVersionUID = -890001719L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QLoggedIn loggedIn = new QLoggedIn("loggedIn");

    public final DateTimePath<java.time.LocalDateTime> date = createDateTime("date", java.time.LocalDateTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QUser user;

    public QLoggedIn(String variable) {
        this(LoggedIn.class, forVariable(variable), INITS);
    }

    public QLoggedIn(Path<? extends LoggedIn> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QLoggedIn(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QLoggedIn(PathMetadata metadata, PathInits inits) {
        this(LoggedIn.class, metadata, inits);
    }

    public QLoggedIn(Class<? extends LoggedIn> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user")) : null;
    }

}


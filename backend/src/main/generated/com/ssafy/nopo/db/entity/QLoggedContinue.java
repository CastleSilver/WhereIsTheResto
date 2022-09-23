package com.ssafy.nopo.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QLoggedContinue is a Querydsl query type for LoggedContinue
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QLoggedContinue extends EntityPathBase<LoggedContinue> {

    private static final long serialVersionUID = -473171125L;

    public static final QLoggedContinue loggedContinue = new QLoggedContinue("loggedContinue");

    public final NumberPath<Integer> consecutively = createNumber("consecutively", Integer.class);

    public final NumberPath<Integer> maxConsecutively = createNumber("maxConsecutively", Integer.class);

    public final DatePath<java.time.LocalDate> recentDate = createDate("recentDate", java.time.LocalDate.class);

    public final NumberPath<Long> userId = createNumber("userId", Long.class);

    public QLoggedContinue(String variable) {
        super(LoggedContinue.class, forVariable(variable));
    }

    public QLoggedContinue(Path<? extends LoggedContinue> path) {
        super(path.getType(), path.getMetadata());
    }

    public QLoggedContinue(PathMetadata metadata) {
        super(LoggedContinue.class, metadata);
    }

}


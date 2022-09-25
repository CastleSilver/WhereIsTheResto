package com.ssafy.nopo.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QAZTI is a Querydsl query type for AZTI
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QAZTI extends EntityPathBase<AZTI> {

    private static final long serialVersionUID = 230229456L;

    public static final QAZTI aZTI = new QAZTI("aZTI");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Integer> type = createNumber("type", Integer.class);

    public QAZTI(String variable) {
        super(AZTI.class, forVariable(variable));
    }

    public QAZTI(Path<? extends AZTI> path) {
        super(path.getType(), path.getMetadata());
    }

    public QAZTI(PathMetadata metadata) {
        super(AZTI.class, metadata);
    }

}


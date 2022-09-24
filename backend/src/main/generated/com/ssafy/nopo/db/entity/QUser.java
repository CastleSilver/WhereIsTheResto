package com.ssafy.nopo.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QUser is a Querydsl query type for User
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QUser extends EntityPathBase<User> {

    private static final long serialVersionUID = 230849869L;

    public static final QUser user = new QUser("user");

    public final EnumPath<AZTI> aztiType = createEnum("aztiType", AZTI.class);

    public final StringPath email = createString("email");

    public final StringPath gender = createString("gender");

    public final StringPath id = createString("id");

    public final StringPath nickname = createString("nickname");

    public final StringPath profileImage = createString("profileImage");

    public final StringPath refreshToken = createString("refreshToken");

    public final EnumPath<Role> role = createEnum("role", Role.class);

    public QUser(String variable) {
        super(User.class, forVariable(variable));
    }

    public QUser(Path<? extends User> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUser(PathMetadata metadata) {
        super(User.class, metadata);
    }

}


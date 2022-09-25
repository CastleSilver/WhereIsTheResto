package com.ssafy.nopo.db.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor

public enum Role {

    GUEST ("ROLE_GUEST","손님"), // 순서에 따라 주입이 달라지는데 WHY??
    USER ("ROLE_USER","사용자"),
    ADMIN ("ROLE_ADMIN","관리자");

    private final String key;

    private final String title;

    @Override
    public String toString() {
        return key;
    }
}
package com.ssafy.nopo.db.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Grade {
    TEN("10년 이상"),
    TWENTY("20년 이상"),
    THIRTY("30년 이상");
    private final String type;
}

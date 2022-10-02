package com.ssafy.nopo.db.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Grade {
    TEN("노포"),
    TWENTY("찐노포"),
    THIRTY("지존노포");
    private final String type;
}

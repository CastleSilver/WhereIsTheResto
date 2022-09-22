package com.ssafy.nopo.api.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewReq {
    private int restoId;
    private String content;
    private Double rating;
}

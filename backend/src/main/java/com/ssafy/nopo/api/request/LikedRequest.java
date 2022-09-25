package com.ssafy.nopo.api.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LikedRequest {

    private int restoId;

    private String userId;

    public void setUserId(String userId) {
        this.userId = userId;
    }

}

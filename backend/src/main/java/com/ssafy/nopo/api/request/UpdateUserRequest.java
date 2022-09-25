package com.ssafy.nopo.api.request;

import com.ssafy.nopo.db.entity.AZTI;
import lombok.Data;

@Data
public class UpdateUserRequest {

    private String nickname;
    private AZTI aztiType;
    private String profileImg;

}

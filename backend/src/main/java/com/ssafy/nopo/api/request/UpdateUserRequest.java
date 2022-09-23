package com.ssafy.nopo.api.request;

import com.ssafy.nopo.db.entity.User;
import lombok.Data;

@Data
public class UpdateUserRequest {

    private String nickname;
    private User.AZTI aztiType;
    private String profileImg;

}

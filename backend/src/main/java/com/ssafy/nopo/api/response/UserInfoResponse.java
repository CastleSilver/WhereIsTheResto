package com.ssafy.nopo.api.response;

import com.ssafy.nopo.db.entity.User;
import lombok.Data;

@Data
public class UserInfoResponse {

    private String nickname;
    private String email;
    private User.Gender gender;
    private int age;
    private String profileImageURL;
    private User.AZTI aztiType;

    public static UserInfoResponse generateUserInfoResDto(User user) {
        UserInfoResponse u = new UserInfoResponse();
        u.setNickname(user.getNickname());
        u.setEmail(user.getEmail());
        u.setGender(user.getGender());
        u.setAge(user.getAge());
        u.setProfileImageURL(user.getProfileImage());
        u.setAztiType(user.getAztiType());
        return u;
    }
}

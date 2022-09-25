package com.ssafy.nopo.api.response;

import com.ssafy.nopo.db.entity.AZTI;
import com.ssafy.nopo.db.entity.Liked;
import com.ssafy.nopo.db.entity.User;
import com.ssafy.nopo.db.entity.Visited;
import lombok.*;

import java.util.List;

@Data
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserInfoResponse {

    private String nickname;
    private String email;
    private String gender;
    private String profileImageURL;
    private AZTI aztiType;
    private List<Liked> likedList;
    private List<Visited> visitedList;

    public static UserInfoResponse generateUserInfoResDto(User user) {
        UserInfoResponse u = new UserInfoResponse();
        u.setNickname(user.getNickname());
        u.setEmail(user.getEmail());
        u.setGender(user.getGender());
        u.setProfileImageURL(user.getProfileImage());
        u.setAztiType(user.getAztiType());
        u.setLikedList(user.getLikedList());
        u.setVisitedList(user.getVisitedList());

        return u;
    }
}

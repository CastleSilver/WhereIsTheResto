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
    private String aztiType;
    private List<LikedRes> like;
    private List<VisitedRes> visited;
    private List<ReviewRes> review;

}

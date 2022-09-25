package com.ssafy.nopo.api.response;

import lombok.*;

@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoginSocialResponse {

    String existUser;
    String status;
    String code;
    String accessToken;
    String refreshToken;
}

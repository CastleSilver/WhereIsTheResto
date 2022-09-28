package com.ssafy.nopo.api.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    String status;
    String code;
    String accessToken;
    String refreshToken;
}

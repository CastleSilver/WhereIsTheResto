package com.ssafy.nopo.api.service;

import com.ssafy.nopo.api.request.UpdateUserRequest;
import com.ssafy.nopo.api.response.*;
import com.ssafy.nopo.db.entity.LoggedContinue;
import com.ssafy.nopo.db.entity.User;

import java.util.ArrayList;
import java.util.Optional;

public interface UserService {
    // 소셜 카카오 로그인
    OAuthTokenDto getAccessTokenKakao (String code);
    LoginSocialResponse loginSocialUser(User user);     // 기존 회원 로그인 -> jwt 토큰 발급
    User login(String id);
    void logoutUser(String nickname);
    void saveRefreshToken(String nickname, String refreshToken);

    String getRefreshToken(String nickname);
    boolean checkNicknameDuplicate(String nickname);
    UserInfoResponse getUserInfoResponse(String id);
    boolean updateUser(String id, UpdateUserRequest updateUserRequest);

    boolean deleteUser(String id);
    User findByNickname(String nickname);

    Optional<User> findById(String id);
    void setLoginData(String userId);
    LoggedContinue getLoginData(String userId);
    void setLoggedInData(String userId);
    ArrayList<LoginLogResponse> getLoginLog(String userId);
    ArrayList<String> getLoginDateLog(String userId);

    LoginResponse getCurrentUserLoginDto(String headerAuth, String nickname);
}

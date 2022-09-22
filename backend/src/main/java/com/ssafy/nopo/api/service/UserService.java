package com.ssafy.nopo.api.service;

import com.ssafy.nopo.api.response.LoginLogResponse;
import com.ssafy.nopo.api.response.LoginResponse;
import com.ssafy.nopo.api.response.LoginSocialResponse;
import com.ssafy.nopo.db.entity.LoggedContinue;
import com.ssafy.nopo.db.entity.User;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Map;
import java.util.Optional;

public interface UserService {
    // 소셜 카카오 로그인
    String getSocialAccessToken(String code) throws IOException;
    Map<String, Object> getUserInfo(String accessToken) throws IOException;     // 엑세스 토큰으로 카카오에 사용자 정보 얻어오기
    LoginSocialResponse loginSocialUser(User user);     // 기존 회원 로그인 -> jwt 토큰 발급
    Optional<User> socialLogin(Map<String, Object> data);
    LoginSocialResponse registerSocialUser(Map<String, Object> data);   // 카카오유저 우리 DB에 저장.
    LoginResponse setSocialAccount(UserDetailsImpl userDetails, String changedNickname);

    void logoutUser(String nickname);
    void saveRefreshToken(String nickname, String refreshToken);
    String getRefreshToken(String nickname);

    boolean checkEmailDuplicate(String email);
    boolean checkNicknameDuplicate(String nickname);
    //    LoginDto loginUser(User user);
    //    boolean updateUser(Long id, UpdateUserDto updateUserDto);
    //    void updateUser(Long id, User user);
    //    boolean updateUserPassword(long id, PasswordDto passwordDto);
//    boolean deleteUser(String nickname);

    User findByNickname(String nickname);
    User findByEmail(String email);
    User findById(Long id);

    void setLoginData(Long userId);
    LoggedContinue getLoginData(Long userId);
    void setLoggedInData(long userId);
    ArrayList<LoginLogResponse> getLoginLog(long userId);
    ArrayList<String> getLoginDateLog(long userId);
    LoginResponse getCurrentUserLoginDto(String headerAuth, String nickname);

//    Authentication getAuthentication(User user);

}

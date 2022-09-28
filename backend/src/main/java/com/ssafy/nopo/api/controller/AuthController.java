package com.ssafy.nopo.api.controller;

import com.ssafy.nopo.api.request.AuthRequest;
import com.ssafy.nopo.api.response.AuthResponse;
import com.ssafy.nopo.api.service.JwtService;
import com.ssafy.nopo.api.service.KakaoAuthService;
import com.ssafy.nopo.api.service.UserService;
import com.ssafy.nopo.db.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.security.auth.login.LoginException;
import java.util.HashMap;
import java.util.Map;

@RestController
@Slf4j
@RequestMapping(value = "/oauth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserService userService;
    private final KakaoAuthService kakaoAuthService;
    private final JwtService jwtService;

    @PostMapping(value = "/login/kakao")
    public Map kakaoLogin(@RequestParam("code") String code) throws Exception {
        /**
         *  Kakao 소셜 로그인
         *  카카오 인가코드를 받아서 AccessToken으로 사용자 정보 받아 저장하고 회원가입 및 로그인 처리 -> 자체 JWT 토큰 발급
         */
        System.out.println("login");
        AuthRequest authRequest = new AuthRequest(userService.getAccessTokenKakao(code).getAccess_token());
        System.out.println("###accessToken: "+ authRequest.getAccessToken());

        AuthResponse authResponse = kakaoAuthService.login(authRequest);
        String userId = authResponse.getId();
        boolean isNewMember = authResponse.getIsNewMember();

        System.out.println("DB에 존재하는 유저인지 확인");
        User loginUser = userService.login(userId);

        if (loginUser == null) {
            throw new LoginException("로그인에서 심각한 오류가 발생했습니다. 재가입 요망");
        }

        System.out.println("jwt 토큰 생성");
        String token = jwtService.create("userId", loginUser.getId(), "access-token");

        Map map = new HashMap();
        map.put("access-token", token);
        map.put("userId", loginUser.getId());
        map.put("isNewMember", isNewMember);

        return map;
    }
}

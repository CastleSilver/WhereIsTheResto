package com.ssafy.nopo.api.controller;

import com.ssafy.nopo.api.service.UserServiceImpl;
import com.ssafy.nopo.db.entity.User;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping(value = "/oauth")
@Validated
public class AuthController {

    private UserServiceImpl authService;

    @ResponseBody
    @GetMapping(value = "/login/kakao")
    public ResponseEntity<?> kakaoLogin(@RequestParam(required = false) String code) throws Exception {
        /**
         *  소셜 로그인
         */
        log.info("AuthController");
        System.out.println("code: " + code);

        String access_token = authService.getAccessToken(code);
        System.out.println("###access_token### : " + access_token);

        // Access Token에 해당하는 회원정보 있다면 JWT 토큰 만들고 Response
        Map<String, Object> data = authService.getUserInfo(access_token);   // access token으로 사용자 정보 받아오기
        Optional<User> userOpt = authService.kakaoLogin(data);  // 사용자의 KakaoId로 DB 조회

        // 유저가 DB에 있다면
        if(userOpt.isPresent()) {
            User user = userOpt.get();
            // access-token 및 refresh-token 발급하고 응답
            return ResponseEntity.ok().body(authService.loginKakaoUser(user));
        } else {
            // 유저가 DB에 없다면 (새로운 유저) 회원가입.
            // 발급받은 사용자 정보 기반으로 유저 저장하고 임시 access 토큰 및 refresh 토큰 발급
            return ResponseEntity.ok().body(authService.registerKakaoUser(data));
        }

    }
}

package com.ssafy.nopo.api.controller;

import com.ssafy.nopo.api.service.OAuthService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping(value = "/oauth")
public class AuthController {

    private OAuthService kakao;

    @ResponseBody
    @GetMapping(value = "/token")
    public void kakaoLogin(@RequestParam(value = "code", required = false) String code) throws Exception {
        log.info("AuthController");
        System.out.println("code: " + code);

        String access_token = kakao.getAccessToken(code);
        System.out.println("###access_token### : " + access_token);

    }
}

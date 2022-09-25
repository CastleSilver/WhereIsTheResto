package com.ssafy.nopo.client;

import com.ssafy.nopo.api.response.KakaoUserResponse;
import com.ssafy.nopo.db.entity.AZTI;
import com.ssafy.nopo.db.entity.Role;
import com.ssafy.nopo.db.entity.User;
import com.ssafy.nopo.exception.TokenValidFailedException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class ClientKakao implements ClientProxy {

    private final WebClient webClient;

    @Override
    public User getUserData(String accessToken) {
        KakaoUserResponse kakaoUserResponse = webClient.get()
                .uri("https://kapi.kakao.com/v2/user/me") // KAKAO의 유저 정보 받아오는 url
                .headers(h -> h.setBearerAuth(accessToken)) // JWT 토큰을 Bearer 토큰으로 지정
                .retrieve()
                // 아래의 onStatus는 error handling
                .onStatus(HttpStatus::is4xxClientError, response -> Mono.error(new TokenValidFailedException("Social Access Token is unauthorized")))
                .onStatus(HttpStatus::is5xxServerError, response -> Mono.error(new TokenValidFailedException("Internal Server Error")))
                .bodyToMono(KakaoUserResponse.class) // KAKAO의 유저 정보를 넣을 Dto 클래스
                .block();

        return User.builder()
                .id(String.valueOf(kakaoUserResponse.getId()))
                .nickname(kakaoUserResponse.getProperties().getNickname())
                .email(kakaoUserResponse.getKakaoAccount().getEmail())
                .gender(kakaoUserResponse.getKakaoAccount().getGender())
                .profileImage((kakaoUserResponse.getProperties().getProfileImage()))
                .role(Role.USER)
                .aztiType(AZTI.X)
                .build();
    }
}

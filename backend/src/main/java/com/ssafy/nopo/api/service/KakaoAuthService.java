package com.ssafy.nopo.api.service;

import com.ssafy.nopo.api.request.AuthRequest;
import com.ssafy.nopo.api.response.AuthResponse;
import com.ssafy.nopo.common.auth.client.ClientKakao;
import com.ssafy.nopo.common.auth.jwt.AuthToken;
import com.ssafy.nopo.common.auth.jwt.AuthTokenProvider;
import com.ssafy.nopo.db.entity.User;
import com.ssafy.nopo.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class KakaoAuthService {

    private final ClientKakao clientKakao;
    private final AuthTokenProvider authTokenProvider;
    private final UserRepository userRepository;

    @Transactional
    public AuthResponse login(AuthRequest authRequest) {

        User kakaoUser = clientKakao.getUserData(authRequest.getAccessToken()); // userData 담기
        String id = kakaoUser.getId();
        System.out.println("### kakaoUser Id : "+id);

        Optional<User> user = userRepository.findById(id);      // 우리 User DB에 해당 사용자 정보가 있는지 확인
        boolean isNewUser = false;

        AuthToken appToken = authTokenProvider.createUserAppToken(id); // 신규 토큰 생성

        if (!user.isPresent()) {     // User DB에 없다면 저장 -> 회원가입
            //userRepository.regist(kakaoUser);
            System.out.println("### 회원가입. User DB에 저장 ###");
            userRepository.save(kakaoUser);
            isNewUser = true;
        }

        return AuthResponse.builder() // /auth/kakao의 응답의 body로 AccessToken(AppToken)을 보내주기위해 builder 사용
                .id(id)
                .isNewMember(isNewUser)
                .build();
    }
}

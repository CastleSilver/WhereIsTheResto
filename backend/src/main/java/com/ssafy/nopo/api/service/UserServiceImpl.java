package com.ssafy.nopo.api.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.nopo.api.request.AztiTypeReq;
import com.ssafy.nopo.api.request.UpdateUserRequest;
import com.ssafy.nopo.api.response.*;
import com.ssafy.nopo.common.auth.jwt.JwtUtil;
import com.ssafy.nopo.common.exception.CustomException;
import com.ssafy.nopo.common.exception.ErrorCode;
import com.ssafy.nopo.common.exception.LoginException;
import com.ssafy.nopo.db.entity.LoggedContinue;
import com.ssafy.nopo.db.entity.Review;
import com.ssafy.nopo.db.entity.User;
import com.ssafy.nopo.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final LoggedContinueRepository loggedContinueRepository;
    private final LoggedInRepository loggedInRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final LikedRepository likedRepository;
    private final VisitedRepository visitedRepository;
    private final ReviewRepository reviewRepository;
    private final JwtUtil jwtUtil;

    private String kakaoClientId = "4451e1614fc6653da21821b099437e5a";
    private String kakaoRedirectUri = "http://j7a401.p.ssafy.io/oauth/kakao/callback";

    @Override
    public User login(String id) {
        Optional<User> user = userRepository.findById(id);

        if (!user.isPresent()) {
            throw new LoginException("???????????? ?????? ???????????????.");
        }
        else {
            return user.get();
        }
    }

    @Override
    @Transactional
    public boolean updateUser(String id, UpdateUserRequest updateUserRequest) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            if (updateUserRequest.getNickname() != null &&
                    !updateUserRequest.getNickname().isEmpty() &&
                    !checkNicknameDuplicate(updateUserRequest.getNickname())) {
                user.setNickname(updateUserRequest.getNickname());
            }

            if (updateUserRequest.getAztiType() != null) {
                user.setAztiType(updateUserRequest.getAztiType());
            }

            if (updateUserRequest.getProfileImg() != null &&
                    !updateUserRequest.getProfileImg().isEmpty()) {
                user.setProfileImage(updateUserRequest.getProfileImg());
            }
            return true;
        }
        return false;
    }

    @Override
    @Transactional
    public boolean updateAztiType(AztiTypeReq aztiTypeReq, String userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            if(aztiTypeReq.getAztiType() != null) {
                user.update(aztiTypeReq.getAztiType());
            }
            return true;
        }
        return false;
    }

    @Override
    @Transactional
    public void saveRefreshToken(String nickname, String refreshToken) {
        User findUser = userRepository.findByNickname(nickname);
        if (findUser != null) {
            findUser.setRefreshToken(refreshToken);
        }
    }

    @Override
    public String getRefreshToken(String nickname) {
        User user = userRepository.findByNickname(nickname);
        return user.getRefreshToken();
    }

    @Override
    @Transactional
    public boolean deleteUser(String  id) {
        User user = userRepository.findById(id).orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_USER_INFO));
        List<Review> reviewList = reviewRepository.findAllByUserId(id);
        reviewList.forEach(i -> reviewRepository.deleteById(i.getId()));
        userRepository.deleteById(id);
        return true;
    }

    @Override
    @Transactional
    public User findByNickname(String nickname) {
        return userRepository.findByNickname(nickname);
    }

    @Override
    public Optional<User> findById(String id) {
        return userRepository.findById(id);
    }

    @Override
    @Transactional
    public UserInfoResponse getUserInfoResponse(String id) {
        log.info("?????? ?????? ???????????? ????????? ??????");
        User user = userRepository.findById(id).orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_USER_INFO));
        log.info(user.getId()+"??? ????????? ???????????????.");
        log.info("entity to dto");

        List<LikedRes> likedResList = likedRepository.findAllByUserId(id)
                .stream().map(LikedRes::new).collect(Collectors.toList());
        List<VisitedRes> visitedResList = visitedRepository.findAllByUserId(id)
                .stream().map(VisitedRes::new).collect(Collectors.toList());
        List<ReviewRes> reviewResList = reviewRepository.findAllByUserId(id)
                .stream().map(ReviewRes::new).collect(Collectors.toList());
        return new UserInfoResponse(user.getNickname(), user.getEmail(), user.getGender(), user.getProfileImage(),
                String.valueOf(user.getAztiType()), likedResList, visitedResList, reviewResList);
    }

    @Override
    @Transactional
    public boolean checkNicknameDuplicate(String nickname) {
        return userRepository.existsByNickname(nickname);
    }

    @Override
    @Transactional
    public void logoutUser(String nickname) {
        User user = findByNickname(nickname);
        if (user != null) {
            user.setRefreshToken(null);
        }
    }

    @Override
    @Transactional
    public void setLoginData(String userId) {
        LocalDate today = LocalDate.now();
        LoggedContinue loggedContinue = loggedContinueRepository.findByUserId(userId);
        if (loggedContinue == null) {
            loggedContinue = new LoggedContinue(userId, 1, 1, today);
            loggedContinueRepository.save(loggedContinue);
        } else if (!today.isEqual(loggedContinue.getRecentDate())) {
            if (today.isEqual(loggedContinue.getRecentDate().plusDays(1))) {
                loggedContinue.setConsecutively(loggedContinue.getConsecutively() + 1);
                if (loggedContinue.getMaxConsecutively() < loggedContinue.getConsecutively()) {
                    loggedContinue.setMaxConsecutively(loggedContinue.getConsecutively());
                }
            } else { //????????? ????????? ?????? ?????? ?????? ?????? ????????? 1??? ??????
                loggedContinue.setConsecutively(1);
            }
            loggedContinue.setRecentDate(today);
        }
    }

//    @Override
//    public LoggedContinue getLoginData(String userId) {
//        return loggedContinueRepository.findByUserId(userId);
//    }

    /** ?????? ?????? ????????? -> ?????? ?????? */
    @Override
    public LoginSocialResponse loginSocialUser(User user) {

        UserDetailsImpl userDetails = UserDetailsImpl.build(user);
        Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, null);
        String accessToken = jwtUtil.createAccessToken(authentication);
        String refreshToken = jwtUtil.createRefreshToken();

        saveRefreshToken(userDetails.getNickname(), refreshToken);
        setLoginData(userDetails.getId());

        return new LoginSocialResponse("true", "200", null, accessToken, refreshToken);

    }

//    @Override
//    @Transactional
//    public void setLoggedInData(String userId) {
//        Optional<User> user = userRepository.findById(userId);
//        if (user.isPresent()) {
//            LoggedIn loggedIn = new LoggedIn();
//            loggedIn.setUser(user.get());
//            loggedIn.setDate(LocalDateTime.now());
//            loggedInRepository.save(loggedIn);
//        }
//    }

//    @Override
//    public ArrayList<LoginLogResponse> getLoginLog(String userId) {
//        return loggedInRepository.getLoginLog(userId);
//    }

//    @Override
//    public ArrayList<String> getLoginDateLog(String userId) {
//        return loggedInRepository.getLoginDateLog(userId);
//    }


//    @Override
//    public LoginResponse getCurrentUserLoginDto(String headerAuth, String nickname) {
//        String accessToken = null;
//        if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")) {
//            accessToken = headerAuth.substring(7, headerAuth.length());
//        }
//        String refreshToken = getRefreshToken(nickname);
//        return new LoginResponse("200", null, accessToken, refreshToken);
//    }

    @Override
    @Transactional
    public OAuthTokenDto getAccessTokenKakao(String code) {
        System.out.println("UserServiceImpl.getAccessTokenKakao() ??????");
        RestTemplate restTemplate = new RestTemplate(); // ????????? ?????? ????????? RestTemplate????????? ??????..

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        //Http ??????

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", kakaoClientId);
        params.add("redirect_uri", kakaoRedirectUri);
        params.add("code", code);
        params.add("client_secret", "vCiFAO1F3QiMUYfXmR1pddgTcLYFkMFN");
        //Http ????????? ??? ??????

        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest = new HttpEntity<>(params, headers);
        //Http ????????? ???????????? ??????

        ResponseEntity<String> accessTokenResponse = restTemplate.exchange(
                "https://kauth.kakao.com/oauth/token",
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class);
        // ?????? ?????? JSON ??????????????? String ????????? ????????? ?????????.

        ObjectMapper objectMapper = new ObjectMapper();
        OAuthTokenDto oauthToken = null;
        try {
            oauthToken = objectMapper.readValue(accessTokenResponse.getBody(), OAuthTokenDto.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return oauthToken;
    }

}


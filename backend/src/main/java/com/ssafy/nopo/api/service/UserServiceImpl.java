package com.ssafy.nopo.api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.ssafy.nopo.api.request.UpdateUserRequest;
import com.ssafy.nopo.api.response.LoginLogResponse;
import com.ssafy.nopo.api.response.LoginResponse;
import com.ssafy.nopo.api.response.LoginSocialResponse;
import com.ssafy.nopo.api.response.UserInfoResponse;
import com.ssafy.nopo.common.auth.jwt.JwtUtil;
import com.ssafy.nopo.db.entity.LoggedContinue;
import com.ssafy.nopo.db.entity.LoggedIn;
import com.ssafy.nopo.db.entity.User;
import com.ssafy.nopo.db.repository.LoggedContinueRepository;
import com.ssafy.nopo.db.repository.LoggedInRepository;
import com.ssafy.nopo.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

//import com.ssafy.nopo.common.util.JwtTokenProvider;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final LoggedContinueRepository loggedContinueRepository;
    private final LoggedInRepository loggedInRepository;
//    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    private String kakaoClientId = "4451e1614fc6653da21821b099437e5a";
    private String kakaoRedirectUri = "http://localhost:3000/oauth/kakao/callback";

    /** 카카오 유저 우리 DB에 저장. 회원가입 -> 로그인 */
    @Override
    public LoginSocialResponse registerSocialUser(Map<String, Object> data) {

        User user = User.builder()
                .id((Long) data.get("id"))
                .nickname((String) data.get("id"))
                .email((String) data.get("email"))
                .gender((User.Gender) data.get("gender"))
                .age((Integer) data.get("age"))
                .build();

        userRepository.save(user);

        LoginSocialResponse loginSocialResponse = loginSocialUser(user);
        loginSocialResponse.setExistUser("false");

        return loginSocialResponse;
    }

    @Override
    @Transactional
    public LoginResponse setSocialAccount(UserDetailsImpl userDetails, String changedNickname) {

        User user = userRepository.getOne(userDetails.getId());
        user.setNickname(changedNickname);

        return new ObjectMapper().convertValue(loginSocialUser(user), LoginResponse.class);
    }

    @Override
    @Transactional
    public boolean updateUser(Long id, UpdateUserRequest updateUserRequest) {
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

//    @Override
//    @Transactional
//    public void updateUser(Long id, User reqDto) {
//        User user = userRepository.getOne(id);
//        System.out.println("여기여기 : " + user.getId());
//        if (reqDto.getPassword() != null) {
//            user.setPassword(reqDto.getPassword());
//        }
//        if (reqDto.getSidoCode() != null) {
//            user.setSidoCode(reqDto.getSidoCode());
//        }
//        if (reqDto.getGugunCode() != null) {
//            user.setGugunCode(reqDto.getGugunCode());
//        }
//        if (reqDto.getGender() != null) {
//            user.setGender(reqDto.getGender());
//        }
//        if (reqDto.getHeight() != 0) {
//            user.setHeight(reqDto.getHeight());
//        }
//        if (reqDto.getWeight() != 0) {
//            user.setWeight(reqDto.getWeight());
//        }
//
//    }

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
    public boolean deleteUser(Long id) {
        User user = userRepository.findById(id).get();
        if (user != null) {
            //user.setRole("drop");
            userRepository.delete(user);

            return true;
        }
        return false;
    }

    @Override
    @Transactional
    public User findByNickname(String nickname) {
        return userRepository.findByNickname(nickname);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(email + "의 이메일을 가진유저가 없습니다"));
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).get();
    }

//    @Override
//    @Transactional
//    public UserInfoResponse getUserInfoResponse(String nickname) {
//        User user = findByNickname(nickname);
//        if (user != null) {
//            return UserInfoResponse.generateUserInfoResDto(user);
//        }
//        return null;
//    }

    @Override
    @Transactional
    public UserInfoResponse getUserInfoResponse(Long id) {
        User user = findById(id);
        if (user != null) {
            return UserInfoResponse.generateUserInfoResDto(user);
        }
        return null;
    }

    @Override
    @Transactional
    public boolean checkEmailDuplicate(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    @Transactional
    public boolean checkNicknameDuplicate(String nickname) {
        return userRepository.existsByNickname(nickname);
    }

    @Override
    public String getSocialAccessToken(String authorize_code) {
        String token = "";
        //String access_Token = "";
        //String refresh_Token = "";
        String reqURL = "https://kauth.kakao.com/oauth/token";

        System.out.println("kakao Client Id : " + kakaoClientId);
        System.out.println("Redirect Uri : " + kakaoRedirectUri);

        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            // setDoOutput()은 OutputStream으로 POST 데이터를 넘겨 주겠다는 옵션.
            // POST 요청을 수행하기 위해 기본값이 false인 setDoOutput을 true로 설정.
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);

            // POST 요청에서 필요한 파라미터를 파라미터 스트림(OutputStream)을 통해 전송
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id=" + kakaoClientId);           // 본인이 발급받은 REST_API_KEY
            sb.append("&redirect_uri=" + kakaoRedirectUri);     // 본인이 설정한 Redirect Uri 주소
            sb.append("&code=" + authorize_code);
            bw.write(sb.toString());
            bw.flush();

            // 결과 코드가 200이라면 성공
            int responseCode = conn.getResponseCode();
            System.out.println("responseCode : " + responseCode);

            // 요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = "";
            StringBuilder result = new StringBuilder();
            // String result = "";

            while ((line = br.readLine()) != null) {
                result.append(line);
                // result += line;
            }
            System.out.println("response body : " + result);

            // Gson 라이브러리에 포함된 클래스로 JSON파싱 객체 생성
            //JsonParser parser = new JsonParser();
            //JsonElement element = parser.parse(result);
            JsonElement element = JsonParser.parseString(result.toString());

            String access_Token = element.getAsJsonObject().get("access_token").getAsString();
            String refresh_Token = element.getAsJsonObject().get("refresh_token").getAsString();

            System.out.println("access_token : " + access_Token);
            System.out.println("refresh_token : " + refresh_Token);

            token = access_Token;

            br.close();
            bw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return token;
    }

    public Map<String, Object> getUserInfo(String access_token) {
        String host = "https://kapi.kakao.com/v2/user/me";
        Map<String, Object> result = new HashMap<>();

        try {
            URL url = new URL(host);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestProperty("Authorization", "Bearer " + access_token);
            conn.setRequestMethod("GET");

            int responseCode = conn.getResponseCode();
            System.out.println("responseCode = " + responseCode);

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = "";
            StringBuilder res = new StringBuilder();

            while ((line = br.readLine()) != null){
                res.append(line);
            }
            System.out.println("res = " + res);

            //JsonElement element = JsonParser.parseString(res.toString());
            JsonObject obj = (JsonObject) JsonParser.parseString(res.toString());
            JsonObject kakaoAccout = (JsonObject) obj.get("kakao_account");

            // id를 포함해 kakao_account 관련 정보 빼오기
            String id = obj.get("id").toString();
            result.put("id", id);
            for (Object key : kakaoAccout.keySet()) {
                result.put((String) key, kakaoAccout.get(key.toString()));
            }

            br.close();

        } catch (IOException e) {
            e.printStackTrace();
        }

        return result;
    }

    @Override
    public Optional<User> socialLogin(Map<String, Object> data) {

        String id = data.get("id").toString();

        return userRepository.findBySocialId(id);
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
    public void setLoginData(Long userId) {
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
            } else { //하루전 로그인 기록 없을 경우 연속 출석일 1로 설정
                loggedContinue.setConsecutively(1);
            }
            loggedContinue.setRecentDate(today);
        }
    }

    @Override
    public LoggedContinue getLoginData(Long userId) {
        return loggedContinueRepository.findByUserId(userId);
    }

//    @Override
//    @Transactional
//    public boolean updateUserPassword(long id, PasswordDto passwordDto) {
//        User user = userRepository.getOne(id);
//        if (user != null) {
//            user.setPassword(passwordEncoder.encode(passwordDto.getPassword()));
//            return true;
//        }
//        return false;
//    }

//    //TODO security Role 체크하여 drop인 유저는 제외 로직 추가 필요
//    @Override
//    @Transactional
//    public LoginResponse loginUser(User user) {
//        Authentication authentication = getAuthentication(user);
//        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
//        if (userDetails.getRole().equals("drop")) {
//            throw new DropUserException();
//        }
//
//        String accessToken = jwtUtil.createAccessToken(authentication);
//        String refreshToken = jwtUtil.createRefreshToken();
//
//        saveRefreshToken(userDetails.getNickname(), refreshToken);
//        setLoginData(userDetails.getId());
//        setLoggedInData(userDetails.getId());
//
//        awardService.awardCheckLogin(userDetails.getId());
//
//        return new LoginResponse("200", null, accessToken, refreshToken);
//    }


    /** 기존 회원 로그인 -> 토큰 발급 */
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

    @Override
    @Transactional
    public void setLoggedInData(long userId) {
        User user = findById(userId);
        if (user != null) {
            LoggedIn loggedIn = new LoggedIn();
            loggedIn.setUser(user);
            loggedIn.setDate(LocalDateTime.now());
            loggedInRepository.save(loggedIn);
        }
    }

    @Override
    public ArrayList<LoginLogResponse> getLoginLog(long userId) {
        return loggedInRepository.getLoginLog(userId);
    }

    @Override
    public ArrayList<String> getLoginDateLog(long userId) {
        return loggedInRepository.getLoginDateLog(userId);
    }


//    @Override
//    public Authentication getAuthentication(User user) {
//        Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword())
//        );
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        return authentication;
//    }

    @Override
    public LoginResponse getCurrentUserLoginDto(String headerAuth, String nickname) {
        String accessToken = null;
        if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")) {
            accessToken = headerAuth.substring(7, headerAuth.length());
        }
        String refreshToken = getRefreshToken(nickname);
        return new LoginResponse("200", null, accessToken, refreshToken);
    }

//    public Long getUserId(String token){
//        /**
//         * @Method Name : getUserId
//         * @작성자 : 김민주
//         * @Method 설명 : 토큰에서 UserId를 꺼내서 반환
//         */
//        Claims claims = jwtTokenProvider.getAllClaims(token);
//        if (claims == null) {
//            return null;
//        }
//
//        try {
//            Member member =  memberQuerydslRepository.findMemberByAuthId(claims.getSubject()).get();
//            return member.getId();
//
//        } catch (NullPointerException e) {
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "존재하지 않는 회원입니다.");
//        }
//    }

}


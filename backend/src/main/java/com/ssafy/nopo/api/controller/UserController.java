package com.ssafy.nopo.api.controller;

import com.ssafy.nopo.api.request.AztiTypeReq;
import com.ssafy.nopo.api.request.UpdateUserRequest;
import com.ssafy.nopo.api.response.BaseResponseEntity;
import com.ssafy.nopo.api.response.LoginResponse;
import com.ssafy.nopo.api.response.UserInfoResponse;
import com.ssafy.nopo.api.service.JwtService;
import com.ssafy.nopo.api.service.UserService;
import com.ssafy.nopo.common.auth.jwt.JwtUtil;
import com.ssafy.nopo.common.exception.CustomException;
import com.ssafy.nopo.common.exception.ErrorCode;
import com.ssafy.nopo.common.exception.InvalidApproachException;
import com.ssafy.nopo.db.entity.User;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping(value = "/user")
public class UserController {

    private final UserService userService;
    private final JwtUtil jwtUtil;
    private final JwtService jwtService;

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserInfo(@PathVariable long userId) {
        /**
         * @Method Name : getUserInfo
         * @Method 설명 : 유저 id로 유저 정보 조회
         */
        log.info("유저 정보 조회 요청");
        String id = userId + "";
        UserInfoResponse userInfoResponse = userService.getUserInfoResponse(id);
        if (userInfoResponse != null) {
            return ResponseEntity.ok().body(userInfoResponse);
        }
        return ResponseEntity.badRequest().body(new BaseResponseEntity(400, "Fail"));
    }

    @PatchMapping
    public ResponseEntity<?> updateUser(@RequestBody UpdateUserRequest updateUserRequest) {
        /**
         * @Method Name : updateUser
         * @Method 설명 : 유저 정보 수정
         */
        if (!jwtService.isValidUser())
            throw new CustomException(ErrorCode.JWT_TOKEN_WRONG_SIGNATURE);
        log.info("유저 아이디 얻어오기");
        String userId = jwtService.getUserId();
        if (userService.updateUser(userId, updateUserRequest)) {
            User user = userService.findById(userId).get();
            String accessToken = jwtUtil.createTokenForRefresh(user);
            String refreshToken = jwtUtil.createRefreshToken();
            return ResponseEntity.ok().body(new LoginResponse("200", null, accessToken, refreshToken));
        }
        return ResponseEntity.badRequest().body(new BaseResponseEntity(400, "Fail"));
    }

    @PatchMapping("/azti")
    public ResponseEntity<?> updateAztiType(@RequestBody AztiTypeReq aztiTypeReq) {
        /**
         * @Method Name : updateAztiType
         * @Method 설명 : AZTI 타입 수정
         */
        if (!jwtService.isValidUser())
            throw new CustomException(ErrorCode.JWT_TOKEN_WRONG_SIGNATURE);
        log.info("유저 아이디 얻어오기");
        String userId = jwtService.getUserId();
        if (userId == null || "".equals(userId))
            throw new CustomException(ErrorCode.LOGIN_NOT_FOUND_ID);

        userService.updateAztiType(aztiTypeReq, userId);

        return ResponseEntity.ok().body(new BaseResponseEntity(200, "Success"));
    }

    @DeleteMapping
    public ResponseEntity<?> deleteUser(){
        /**
         * @Method Name : deleteUser
         * @Method 설명 : 유저 정보 삭제
         */
        if (!jwtService.isValidUser())
            throw new InvalidApproachException("사용자 인증 실패");

        String currentUid = jwtService.getUserId();

        userService.deleteUser(currentUid);
        return ResponseEntity.ok().body(new BaseResponseEntity(200, "Success"));
    }

}

package com.ssafy.nopo.api.controller;

import com.ssafy.nopo.api.request.UpdateUserRequest;
import com.ssafy.nopo.api.response.BaseResponseEntity;
import com.ssafy.nopo.api.response.LoginResponse;
import com.ssafy.nopo.api.response.UserInfoResponse;
import com.ssafy.nopo.api.service.UserDetailsImpl;
import com.ssafy.nopo.api.service.UserService;
import com.ssafy.nopo.common.auth.jwt.JwtUtil;
import com.ssafy.nopo.db.entity.User;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping(value = "/user")
public class UserController {

    private final UserService userService;
    private final JwtUtil jwtUtil;

    @GetMapping
    public ResponseEntity<?> getUserInfo(@RequestParam(required = false) Long userId) {
        UserInfoResponse userInfoResponse = userService.getUserInfoResponse(userId);
        if (userInfoResponse != null) {
            return ResponseEntity.ok().body(userInfoResponse);
        }
        return ResponseEntity.badRequest().body(new BaseResponseEntity(400, "Fail"));
    }

    @GetMapping("/me")
    public ResponseEntity<?> getUser(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        UserInfoResponse userInfoResponse = userService.getUserInfoResponse(userDetails.getId());
        if (userInfoResponse != null) {
            return ResponseEntity.ok().body(userInfoResponse);
        }
        return ResponseEntity.badRequest().body(new BaseResponseEntity(400, "Fail"));
    }

    @PatchMapping
    public ResponseEntity<?> updateUser(@AuthenticationPrincipal UserDetailsImpl userDetails,
                                        @RequestBody UpdateUserRequest updateUserRequest) {
        if (userService.updateUser(userDetails.getId(), updateUserRequest)) {
            User user = userService.findById(userDetails.getId());
            String accessToken = jwtUtil.createTokenForRefresh(user);
            String refreshToken = jwtUtil.createRefreshToken();
            return ResponseEntity.ok().body(new LoginResponse("200", null, accessToken, refreshToken));
        }
        return ResponseEntity.badRequest().body(new BaseResponseEntity(400, "Fail"));
    }

    @DeleteMapping
    public ResponseEntity<?> deleteUser(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        if (userService.deleteUser(userDetails.getId())) {
            return ResponseEntity.ok().body(new BaseResponseEntity(200, "Success"));
        }
        return ResponseEntity.badRequest().body(new BaseResponseEntity(400, "Fail"));
    }
}

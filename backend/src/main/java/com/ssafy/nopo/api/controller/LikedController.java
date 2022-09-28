package com.ssafy.nopo.api.controller;

import com.ssafy.nopo.api.request.LikedRequest;
import com.ssafy.nopo.api.response.BaseResponseEntity;
import com.ssafy.nopo.api.service.JwtService;
import com.ssafy.nopo.api.service.LikedService;
import com.ssafy.nopo.common.exception.InvalidApproachException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/like")
public class LikedController {

    private final JwtService jwtService;
    private final LikedService likedService;

    @PostMapping
    public ResponseEntity<?> addLiked(@RequestBody LikedRequest likedRequest) {

        if (!jwtService.isValidUser())
            throw new InvalidApproachException("사용자 인증 실패");

        String currentUid = jwtService.getUserId();
        likedRequest.setUserId(currentUid);

        int likedId = likedService.addLikedResto(likedRequest);

        return ResponseEntity.ok().body(new BaseResponseEntity(200, "Success"));
    }

    @DeleteMapping
    public ResponseEntity<?> deleteLiked(@RequestBody LikedRequest likedRequest) {
        if (!jwtService.isValidUser())
            throw new InvalidApproachException("사용자 인증 실패");

        String currentUid = jwtService.getUserId();
        likedRequest.setUserId(currentUid);

        likedService.deleteLikedResto(likedRequest);
        return ResponseEntity.ok().body(new BaseResponseEntity(200, "Success"));
    }
}

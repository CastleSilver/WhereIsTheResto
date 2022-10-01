package com.ssafy.nopo.api.controller;

import com.ssafy.nopo.api.request.VisitedRequest;
import com.ssafy.nopo.api.response.BaseResponseEntity;
import com.ssafy.nopo.api.service.JwtService;
import com.ssafy.nopo.api.service.VisitedService;
import com.ssafy.nopo.common.exception.InvalidApproachException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/visited")
public class VisitedController {

    private final JwtService jwtService;
    private final VisitedService visitedService;

    @PostMapping
    public ResponseEntity<?> addVisited(@RequestBody VisitedRequest visitedRequest) {

        if (!jwtService.isValidUser())
            throw new InvalidApproachException("사용자 인증 실패");

        String currentUid = jwtService.getUserId();
        visitedRequest.setUserId(currentUid);

        int visitedId = visitedService.addVisitedResto(visitedRequest);

        return ResponseEntity.ok().body(new BaseResponseEntity(200, "Success"));
    }

    @DeleteMapping
    public ResponseEntity<?> deleteVisited(@RequestBody VisitedRequest visitedRequest) {
        if (!jwtService.isValidUser())
            throw new InvalidApproachException("사용자 인증 실패");

        String currentUid = jwtService.getUserId();
        visitedRequest.setUserId(currentUid);

        if(visitedService.deleteVisitedResto(visitedRequest)) {
            return ResponseEntity.ok().body(new BaseResponseEntity(200, "Success"));
        }
        return ResponseEntity.badRequest().body(new BaseResponseEntity(400, "Fail"));
    }
}

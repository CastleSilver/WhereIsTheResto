package com.ssafy.nopo.api.controller;

import com.ssafy.nopo.api.response.RestoListRes;
import com.ssafy.nopo.api.response.RestoRes;
import com.ssafy.nopo.api.response.ReviewRes;
import com.ssafy.nopo.api.service.JwtService;
import com.ssafy.nopo.api.service.RestoService;
import com.ssafy.nopo.common.exception.CustomException;
import com.ssafy.nopo.common.exception.ErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping("/resto")
@RequiredArgsConstructor
public class RestoController {

    private final RestoService restoService;
    private final JwtService jwtService;

    @GetMapping("/{restoId}")
    public ResponseEntity<?> getRestaurant(@PathVariable int restoId){
        /**
         * @Method Name : getRestaurant
         * @Method 설명 : 노포 id로 노포 단일 조회
         */
        log.info("리뷰 정보 등록 시작");
        if (!jwtService.isValidUser())
            throw new CustomException(ErrorCode.JWT_TOKEN_WRONG_SIGNATURE);
        log.info("유저 아이디 얻어오기");
        String userId = jwtService.getUserId();
        RestoRes restoRes = restoService.findByRestoId(restoId, userId);
        if(restoRes == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return ResponseEntity.ok().body(restoRes);
    }

    @GetMapping
    public ResponseEntity<?> getRestoList(HttpServletRequest request){
        /**
         * @Method Name : getRestoList
         * @Method 설명 : 메인화면에 띄울 리스트 조회
         */
        RestoListRes restoListRes = restoService.getRestoLists();
        return ResponseEntity.ok().body(restoListRes);
    }
}

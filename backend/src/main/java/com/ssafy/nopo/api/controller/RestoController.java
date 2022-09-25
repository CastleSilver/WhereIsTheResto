package com.ssafy.nopo.api.controller;

import com.ssafy.nopo.api.response.RestoListRes;
import com.ssafy.nopo.api.response.RestoRes;
import com.ssafy.nopo.api.response.ReviewRes;
import com.ssafy.nopo.api.service.RestoService;
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

    @GetMapping("/{restoId}")
    public ResponseEntity<?> getRestaurant(@PathVariable int restoId){
        /**
         * @Method Name : getRestaurant
         * @Method 설명 : 노포 id로 노포 단일 조회
         */
        RestoRes restoRes = restoService.findByRestoId(restoId);
        if(restoRes == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return ResponseEntity.ok().body(restoRes);
    }

    @GetMapping
    public ResponseEntity<?> getRestoList(HttpServletRequest request){
        /**
         * @Method Name : getRestoList
         * @작성자 : 허성은
         * @Method 설명 : 메인화면에 띄울 리스트 조회
         */
        RestoListRes restoListRes = restoService.getRestoLists();
        return ResponseEntity.ok().body(restoListRes);
    }
}

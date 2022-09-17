package com.ssafy.nopo.api.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;


@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping(value = "/oauth")
public class UserController {

    @ResponseBody
    @GetMapping(value = "/kakao/callback")
    public void kakaoLogin(@RequestParam(value = "code", required = false) String code) throws Exception {
        log.info("UserController");

        System.out.println("code: " + code);
        //return "index";
    }

}



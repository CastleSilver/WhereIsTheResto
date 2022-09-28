package com.ssafy.nopo.api.service;

import com.ssafy.nopo.common.exception.UnauthorizedException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.Map;

@Service
@Slf4j
public class JwtService {

    public static final Logger logger = LoggerFactory.getLogger(JwtService.class);
    private static final String SALT = "tEa MaKDEV fOC usonP oweR fulSec Ur itY sER viCe";

    private static final int EXPIRE_SECONDS = 3600 ;

    public <T> String create(String key, T data, String subject) {

        String jwt = Jwts.builder()
                .setHeaderParam("type", "JWT")
                .setHeaderParam("regDate", System.currentTimeMillis())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * EXPIRE_SECONDS))
                .setSubject(subject)
                .claim(key, data)
                .signWith(SignatureAlgorithm.HS256, this.generateKey())
                .compact();
        return jwt;
    }

    private byte[] generateKey() {
        byte[] key = null;
        try {
            key = SALT.getBytes("UTF-8");
        } catch (UnsupportedEncodingException e) {
            if (logger.isInfoEnabled()) {
                e.printStackTrace();
            } else {
                logger.error("Making JWT Key Error ::: {}", e.getMessage());
            }
        }

        return key;
    }

    //	전달 받은 토큰이 제대로 생성된것인지 확인 하고 문제가 있다면 UnauthorizedException을 발생.
    public boolean isUsable(String jwt) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(this.generateKey()).parseClaimsJws(jwt);
            return true;
        } catch (Exception e) {
            logger.error(e.getMessage());
            return false;
        }
    }

    // 현재 사용자가 유효 한지 검사하는 메소드
    public boolean isValidUser() {

        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
                .getRequest();
        String jwt = request.getHeader("Authorization");
        jwt = jwt.replaceAll("Bearer ", "");
        return isUsable(jwt);
    }

    public Map<String, Object> getData() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
                .getRequest();
        String jwt = request.getHeader("Authorization");
        jwt = jwt.replaceAll("Bearer ", "");
        Jws<Claims> claims = null;

        try {
            claims = Jwts.parser().setSigningKey(SALT.getBytes("UTF-8")).parseClaimsJws(jwt);
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new UnauthorizedException();
        }
        Map<String, Object> value = claims.getBody();
        logger.info("value : {}", value);
        return value;

    }

    public String getUserId() {
        return (String) this.getData().get("userId");
    }

    public int getExpireSeconds() { return (int) this.getData().get("expireSeconds");}

}


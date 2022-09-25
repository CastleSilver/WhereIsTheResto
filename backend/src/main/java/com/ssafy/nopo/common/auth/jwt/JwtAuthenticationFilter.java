package com.ssafy.nopo.common.auth.jwt;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
// appToken이 header내에 bearertoken으로 들어가 있는 지 확인 하는 filter

    private final AuthTokenProvider tokenProvider;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)  throws ServletException, IOException {

        final String authorizationHeader = request.getHeader("Authorization"); // Authorization 헤더 꺼냄

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) { // JWT 토큰이 존재하는지 확인
            String tokenStr = JwtHeaderUtil.getAccessToken(request); // Bearer로 시작하는 값에서 Bearer를 제거한 accessToken(appToken) 반환
            AuthToken token = tokenProvider.convertAuthToken(tokenStr); // String to AuthToken

            if (token.validate()) { // token이 유효한지 확인
                Authentication authentication = tokenProvider.getAuthentication(token);
                SecurityContextHolder.getContext().setAuthentication(authentication); // token에 존재하는 authentication 정보 삽입
            }

            filterChain.doFilter(request, response);
        }
    }
}
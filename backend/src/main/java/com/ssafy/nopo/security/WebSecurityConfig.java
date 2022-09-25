//package com.ssafy.nopo.security;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.builders.WebSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//@RequiredArgsConstructor
//@Configuration
//@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true)
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//
//    private final JwtTokenProvider jwtTokenProvider;
//    /**
//     * 스프링 시큐리티 룰을 무시하게 하는 Url 규칙
//     * -> Swagger UI v2 사용시 404 에러를 방지하기 위해 예외 처리
//     */
////    @Override
////    public void configure(WebSecurity web) {
////        web.ignoring().antMatchers("/v2/api-docs", "/configuration/**", "/swagger*/**", "/webjars/**");
////    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//
//        http
//                .cors().configurationSource(corsConfigurationSource()).and()
//                .csrf().disable() // csrf 보안 설정을 비활성화
//                .authorizeRequests()// 보호된 리소스 URI에 접근할 수 있는 권한을 설정
//                .antMatchers(HttpMethod.OPTIONS).permitAll() // CORS Preflight 방지 위해 로그인요청 url 이전에 OPTIONS 요청 보내기
//                .antMatchers("/api/kakao/**").permitAll() //전체 접근 허용
//                .antMatchers("/api/main/list").permitAll()
//                .antMatchers("/api/class/list").permitAll()
//                .antMatchers("/api/sub").permitAll()
//                .anyRequest().permitAll().and() // 해당 요청을 인증된 사용자만 사용 가능
////                .exceptionHandling().authenticationEntryPoint(jwtauthenticationEntryPoint)
//                .headers()
//                .frameOptions().disable().and()
//                .authorizeRequests()
//                .and()
//                    .sessionManagement()
//                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)// JWT 토큰은 기본적으로 session을 사용하지 않기 때문에 STATELESS(무상태)를 유지
//                .and()
//                    .oauth2Login().defaultSuccessUrl("/login-success")  // oauth2 인증이 성공했을 때, 이동되는 url을 설정.
//                    .successHandler(oAuth2AuthenticationSuccessHandler) // 인증 프로세스에 따라 사용자 정의 로직을 실행.
//                    .userInfoEndpoint().userService(userOAuth2Service) // 로그인이 성공하면 해당 유저의 정보를 들고 customOAuth2UserService에서 후처리를 해주겠다는 의미.
//                .and()
//                    .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
//
////                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), JwtAuthenticationFilter.class);
////                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
//        // UsernamePasswordAuthenticationFilter :
//        // - (아이디와 비밀번호를 사용하는 form 기반 인증) 설정된 로그인 URL로 오는 요청을 감시하며, 유저 인증 처리
//        // - AuthenticationManager를 통한 인증 실행
//        // - 인증 성공 시, 얻은 Authentication 객체를 SecurityContext에 저장 후 AuthenticationSuccessHandler 실행
//        // - 인증 실패 시, AuthenticationFailureHandler 실행
//
//    }
//
//}

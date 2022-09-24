package com.ssafy.nopo.config;

import com.ssafy.nopo.common.auth.jwt.AuthTokenProvider;
import com.ssafy.nopo.common.auth.jwt.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * WebSecurityConfigurerAdapter를 상속받은 config 클래스에
 *
 * @EnableWebSecurity을 달면 SpringSecurityFilterChain이 자동으로 포함된다.
 */

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final AuthTokenProvider authTokenProvider;

    // Http 설정 이후 Web 설정이 이루어지기 때문에 오버라이딩할 항목은 Web에서 설정

    @Override
    public void configure(WebSecurity webSecurity) throws Exception {
        webSecurity.ignoring().antMatchers("/v2/api-docs", "/configuration/**", "/swagger*/**", "/webjars/**");

    }

    @Override
    protected void configure (HttpSecurity httpSecurity) throws Exception {

        JwtAuthenticationFilter jwtAuthFilter = new JwtAuthenticationFilter(authTokenProvider);

        httpSecurity
                .csrf().disable() // csrf 방어기능 막기 (Swgger 사용용) (Rest API 사용시에는 사용 안해도 된다)
                .headers().frameOptions().disable().and() // 선택적 (프레임옵션) 헤더 제거 기능
                .authorizeRequests() // 다음으로 올 코드들이 URL별 권한 관리를 할 것이라는 것을 나타냄
                .antMatchers(HttpMethod.OPTIONS).permitAll() // CORS Preflight 방지 위해 로그인요청 url 이전에 OPTIONS 요청 보내기
                .antMatchers("/api/oauth/**").permitAll() //전체 접근 허용
//              .antMatchers("/","/css/**","/images/**","/js/**","/webjars/**")
                .antMatchers("/","/api/**").permitAll() // 위에 지정된 URL을 전체 열람 권한을 줌
                //.antMatchers().hasRole(Role.USER.name())
                //.anyRequest().authenticated().and() // 설정 값 이외에는 authenticated 되어야만 사용할 수 있다.
                .anyRequest().permitAll().and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS); // 세션을 STATELESS하게 해서 세션에 정보 저장을 안하게 하기 -> 보안성 upgrade
//                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class); // 커스텀 필터 등록하며, 기존에 지정된 필터에 앞서 실행하려 했지만 의미불명의 오류로 200 OK return을 계속 받아 주석처리.

    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

//
//    private final JwtTokenProvider jwtTokenProvider;
//    /**
//     * 스프링 시큐리티 룰을 무시하게 하는 Url 규칙
//     * -> Swagger UI v2 사용시 404 에러를 방지하기 위해 예외 처리
//     */
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//
//        http
//                .authorizeRequests()// 보호된 리소스 URI에 접근할 수 있는 권한을 설정
//                .antMatchers(HttpMethod.OPTIONS).permitAll() // CORS Preflight 방지 위해 로그인요청 url 이전에 OPTIONS 요청 보내기
//                .antMatchers("/api/oauth/**").permitAll() //전체 접근 허용
//                .antMatchers("/api/main/list").permitAll()
//                .antMatchers("/api/class/list").permitAll()
//                .antMatchers("/api/sub").permitAll()
//                .anyRequest().permitAll().and() // 해당 요청을 인증된 사용자만 사용 가능
//                .headers()
//                .frameOptions().disable().and()
//                .authorizeRequests().and()
//                .cors().configurationSource(corsConfigurationSource()).and()
//                .csrf().disable() // csrf 보안 설정을 비활성화
//                .sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS).and() // JWT 토큰은 기본적으로 session을 사용하지 않기 때문에 STATELESS(무상태)를 유지
//                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
//        // UsernamePasswordAuthenticationFilter :
//        // - (아이디와 비밀번호를 사용하는 form 기반 인증) 설정된 로그인 URL로 오는 요청을 감시하며, 유저 인증 처리
//        // - AuthenticationManager를 통한 인증 실행
//        // - 인증 성공 시, 얻은 Authentication 객체를 SecurityContext에 저장 후 AuthenticationSuccessHandler 실행
//        // - 인증 실패 시, AuthenticationFailureHandler 실행
//
//    }
//    // CORS 허용 적용
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//
//        configuration.addAllowedOrigin("http://localhost:3000");
//        configuration.addAllowedOrigin("https://i7a605.p.ssafy.io");
//        configuration.addAllowedOrigin("http://i7a605.p.ssafy.io");
//        configuration.addAllowedHeader("*");
//        configuration.addAllowedMethod("*");
//        configuration.setAllowCredentials(true);
//        configuration.addExposedHeader("Authorization");
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }
}

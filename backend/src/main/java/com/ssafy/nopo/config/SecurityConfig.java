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
}

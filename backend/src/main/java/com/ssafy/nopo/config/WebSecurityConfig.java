//package com.ssafy.nopo.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//@Configuration
//@EnableWebSecurity
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
////    @Autowired
////    private AuthEntryPointJwt unauthorizedHandler;
////
////    @Bean
////    public AuthTokenFilter authenticationJwtTokenFilter() {
////        return new AuthTokenFilter();
////    }
////
////    @Bean
////    @Override
////    public AuthenticationManager authenticationManagerBean() throws Exception {
////        return super.authenticationManagerBean();
////    }
////
////    @Autowired
////    UserDetailsServiceImpl userDetailsService;
////    private static final String[] Exclude_Paths =
////            {"/api", "/api/oauth/login/**", "/api/user/login/**", "/api/user/join", "/api/user/duplicate-email/*", "/api/user/duplicate-nickname/*",
////                    "/api/user/refresh", "/api/room/disconnect","/api/room", "/swagger-ui.html", "/webjars/springfox-swagger-ui/**"
////                    , "/swagger-resources/**", "/v2/api-docs", "/csrf", "/error", "/api/report", "/api/report/*", "/api/user/send-pw"};
////
////    @Override
////    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
////
////        authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
////    }
////
////    @Override
////    protected void configure(HttpSecurity http) throws Exception {
////
////        http.cors().and().csrf().disable()
////                .authorizeRequests().antMatchers(Exclude_Paths).permitAll()
////                .anyRequest().authenticated().and()
////                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
////                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
////        ;
////        http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
////    }
////
////
////    @Bean
////    public CorsConfigurationSource corsConfigurationSource() {
////        CorsConfiguration configuration = new CorsConfiguration();
////
////        configuration.addAllowedOrigin("http://localhost:3000");;
////        configuration.addAllowedOrigin("https://i7a401.p.ssafy.io");
////        configuration.addAllowedOrigin("http://i7a401.p.ssafy.io");
////        configuration.addAllowedHeader("*");
////        configuration.addAllowedMethod("*");
////        configuration.setAllowCredentials(true);
////
////        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
////        source.registerCorsConfiguration("/**", configuration);
////        return source;
////    }
//}

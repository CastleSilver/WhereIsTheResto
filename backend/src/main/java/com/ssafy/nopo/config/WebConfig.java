package com.ssafy.nopo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) { // 최신 issue : 브라우저 정책 바뀌어서 메소드 및 맵핑을 명시적으로 해야함
        registry.addMapping("/**")
                .allowedMethods("*")
                .allowedOrigins("http://j7a401.p.ssafy.io:5173")
                .allowedOrigins("http://j7a401.p.ssafy.io")
                .allowedOrigins("http://localhost:5173")
                .allowedOrigins("http://localhost:8080")
//                .allowedOrigins("http://localhost:80")
        ;
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("swagger-ui.html")
                .addResourceLocations("classpath:/META-INF/resources/");

        registry.addResourceHandler("/webjars/**")
                .addResourceLocations("classpath:/META-INF/resources/webjars/");
    }
}


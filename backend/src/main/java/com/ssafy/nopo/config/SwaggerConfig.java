package com.ssafy.nopo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.UiConfiguration;
import springfox.documentation.swagger.web.UiConfigurationBuilder;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebMvc
@EnableSwagger2
public class SwaggerConfig implements WebMvcConfigurer {

    @Bean
    public Docket restAPI() {
        ParameterBuilder aParameterBuilder = new ParameterBuilder(); //빌더 만들고
        aParameterBuilder.name("access-token") //헤더 이름
                .description("로그인 후 제공되는 액세스 헤더를 넣어주세요 (만료 시간 주의)") //설명
                .modelRef(new ModelRef("string")) //변수 타입
                .parameterType("header") //파라미터 타입 - 헤더
                .required(false) // 있어도 되는지 없는지
                .build();

        List<Parameter> aParameters = new ArrayList<>(); //만든 파라미터들을 넣을 리스트 생성
        aParameters.add(aParameterBuilder.build()); //만든 파라미터 넣기

        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .globalOperationParameters(aParameters)
                .select()
                //.apis(RequestHandlerSelectors.basePackage("com.ssafy.nopo")) //문서화 진행할 경로
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.ant("/**")) // Path 선택 옵션은 -> PathSelectors.ant("/api/*"))
                .build()
                .securityContexts(Arrays.asList(securityContext())) //전역 변수 설정을 위한 환경
                .securitySchemes(Arrays.asList(apiKey())); // 전역 변수
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("Team AtoZ Nopo Spring Boot RESTful API")
                .version("1.0.1")
                .description("Swagger-Ui 테스트<br/> <mark>태그적용</mark>")
                .build();
    }

    private ApiKey apiKey() {
        return new ApiKey("JWT", "access-token", "header");
    }

    private SecurityContext securityContext() {
        return SecurityContext.builder().securityReferences(defaultAuth()).build();
    }

    private List<SecurityReference> defaultAuth() {
        AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
        authorizationScopes[0] = authorizationScope;
        return Arrays.asList(new SecurityReference("JWT", authorizationScopes));
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("swagger-ui.html")
                .addResourceLocations("classpath:/META-INF/resources/");

        registry.addResourceHandler("/webjars/**")
                .addResourceLocations("classpath:/META-INF/resources/webjars/");

        // -- Static resources
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
        registry.addResourceHandler("/css/**").addResourceLocations("classpath:/static/css");
        registry.addResourceHandler("/js/**").addResourceLocations("classpath:/static/js/");
        registry.addResourceHandler("/images/**").addResourceLocations("classpath:/static/images/");

    }

    @Bean
    UiConfiguration uiConfig() {
        return UiConfigurationBuilder.builder()
//                .supportedSubmitMethods(newArrayList("get").toArray(new String[0])) // try it 기능 활성화 범위
//                .operationsSorter(METHOD)
                .build();
    }

    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers(
                // -- Static resources
                "/css/**", "/images/**", "/js/**"
                // -- Swagger UI v2
                , "/v2/api-docs", "/swagger-resources/**"
                , "/swagger-ui.html", "/webjars/**", "/swagger/**"
                // -- Swagger UI v3 (Open API)
                , "/v3/api-docs/**", "/swagger-ui/**"
        );
    }
}


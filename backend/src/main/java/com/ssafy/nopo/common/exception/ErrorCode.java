package com.ssafy.nopo.common.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum ErrorCode {
    //img
    IMAGE_UPLOAD_ERROR(HttpStatus.BAD_REQUEST, "400", "이미지 업로드에 실패했습니다"),
    WRONG_IMAGE_FORMAT(HttpStatus.BAD_REQUEST, "400", "지원하지 않는 파일 형식입니다"),

    //resto
    NOT_FOUND_RESTO_INFO(HttpStatus.BAD_REQUEST, "400", "해당 가게가 존재하지 않습니다"),
    RESTO_LiST_GET_ERROR(HttpStatus.BAD_REQUEST, "400", "가게 리스트 조회 중 오류가 발생했습니다"),

    //review
    REVIEW_UPDATE_WRONG_ACCESS(HttpStatus.BAD_REQUEST, "400", "본인의 리뷰만 수정할 수 있습니다"),
    REVIEW_DELETE_WRONG_ACCESS(HttpStatus.BAD_REQUEST, "400", "본인의 리뷰만 삭제할 수 있습니다"),
    ALREADY_POST_REVIEW_ERROR(HttpStatus.BAD_REQUEST, "400", "리뷰를 중복 작성할 수 없습니다"),
    NOT_FOUND_REVIEW_INFO(HttpStatus.BAD_REQUEST, "400", "해당 리뷰가 존재하지 않습니다"),
    CONTENT_INPUT_ERROR(HttpStatus.BAD_REQUEST, "400", "내용은 필수값입니다. 내용을 작성해주세요"),
    RATING_INPUT_ERROR(HttpStatus.BAD_REQUEST, "400", "평점은 필수값입니다. 평점을 입력해주세요"),

    // Token
    JWT_TOKEN_WRONG_SIGNATURE(HttpStatus.UNAUTHORIZED, "401", "잘못된 JWT 서명입니다"),
    JWT_TOKEN_NOT_SUPPORTED(HttpStatus.UNAUTHORIZED, "401", "지원되지 않는 JWT 토큰입니다."),
    JWT_TOKEN_WRONG_FORM(HttpStatus.UNAUTHORIZED, "401", "JWT 토큰이 잘못되었습니다."),

    REFRESH_TOKEN_EXPIRED(HttpStatus.UNAUTHORIZED, "401", "로그인이 만료되었습니다. 재로그인 하세요."),
    REFRESH_TOKEN_NOT_FOUND(HttpStatus.NOT_FOUND, "404", "Refresh Token이 존재하지 않습니다. 로그인 해주세요"),
    REFRESH_TOKEN_NOT_MATCH(HttpStatus.UNAUTHORIZED, "401", "Refresh Token이 일치하지 않습니다"),
    REFRESH_TOKEN_REISSUE_WRONG_INPUT(HttpStatus.BAD_REQUEST, "400", "userId, accessToken, refreshToken을 입력해주세요"),

    // 로그인
    LOGIN_NOT_FOUND_ID(HttpStatus.NOT_FOUND, "400", "해당 아이디를 찾을 수 없습니다"),
    NOT_FOUND_USER_INFO(HttpStatus.NOT_FOUND, "400", "해당 유저가 존재하지 않습니다");


    private final HttpStatus status;
    private final String errorCode;
    private final String errorMessage;
}

package com.ssafy.nopo.api.controller;

import com.ssafy.nopo.api.request.ReviewReq;
import com.ssafy.nopo.api.response.ReviewRes;
import com.ssafy.nopo.api.service.ReviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping("/review")
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Object> createReview(HttpServletRequest request,
                                                  @RequestBody ReviewReq reviewReq) {
        /**
         * @Method Name : createReview
         * @작성자 : 허성은
         * @Method 설명 : 리뷰를 등록한다.
         */
        log.info("리뷰 정보 등록 시작");
        log.info("유저 아이디 얻어오기");
//        String token = JwtHeaderUtil.getAccessToken(request);
//        String userId = (authService.getAuthId(token));
//        if(reviewService.findByRestoIdAndUserId(reviewReq.getRestoId(), userId) == null){
//            log.info("리뷰 등록");
//            reviewService.createReview(reviewReq, userId);
//            return new ResponseEntity<>(HttpStatus.OK);
//        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/{reviewId}")
    public ResponseEntity<ReviewRes> getReview(@PathVariable int reviewId){
        /**
         * @Method Name : getReview
         * @작성자 : 허성은
         * @Method 설명 : 리뷰 id로 리뷰 단일 조회
         */
        ReviewRes reviewRes = reviewService.findByReviewId(reviewId);
        if(reviewRes == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(reviewRes, HttpStatus.OK);
    }

    @DeleteMapping("/{reviewId}")
    public ResponseEntity<Object> deleteReview(@PathVariable int reviewId){
        /**
         * @Method Name : deleteReview
         * @작성자 : 허성은
         * @Method 설명 : 리뷰 id로 리뷰 삭제
         */
        try {
            reviewService.deleteReview(reviewId);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{reviewId}")
    public ResponseEntity<Object> updateReview(@PathVariable int reviewId,
                                               @RequestBody ReviewReq reviewReq){
        /**
         * @Method Name : updateReview
         * @작성자 : 허성은
         * @Method 설명 : 리뷰 id로 리뷰 수정
         */
        try {
            reviewService.modifyReview(reviewId, reviewReq);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

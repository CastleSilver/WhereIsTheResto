package com.ssafy.nopo.api.service;

import com.ssafy.nopo.api.response.RestoListRes;
import com.ssafy.nopo.api.response.RestoRes;
import com.ssafy.nopo.api.response.ReviewRes;
import com.ssafy.nopo.common.exception.CustomException;
import com.ssafy.nopo.common.exception.ErrorCode;
import com.ssafy.nopo.db.entity.Grade;
import com.ssafy.nopo.db.entity.OldRestaurant;
import com.ssafy.nopo.db.repository.RestoRepository;
import com.ssafy.nopo.db.repository.ReviewRepository;
import com.ssafy.nopo.db.repository.querydslRepo.RestoQuerydslRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class RestoServiceImpl implements RestoService{
    private final RestoRepository restoRepository;
    private final RestoQuerydslRepository restoQuerydslRepository;
    private final ReviewRepository reviewRepository;
    static Calendar now = Calendar.getInstance();
    @Override
    public RestoRes findByRestoId(int restoId) {
        OldRestaurant resto = restoRepository.findById(restoId).orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_RESTO_INFO));
        int age = now.get(Calendar.YEAR) - Integer.parseInt(resto.getYear());
        List<ReviewRes> reviewList = reviewRepository.findAllByRestoId(resto)
                                    .stream()
                                    .map(ReviewRes::new)
                                    .collect(Collectors.toList());
        double avgRating = 0;
        if(!reviewList.isEmpty()){
            avgRating = RestoRes.getAvgRating(reviewList);
        }
        return new RestoRes(restoId, age, resto.getThumbnail(), resto.getAddress(), resto.getRestoName(), resto.getSectors(),
                resto.getLocationX(), resto.getLocationY(), resto.getPhoneNumber(), resto.getMenu1(), resto.getMenu2(), String.valueOf(resto.getGrade()), reviewList, avgRating);
    }

    @Override
    public RestoListRes getRestoLists() {
        return new RestoListRes(findAllByRestoGrade(), orderByLikedCnt());
    }

    @Override
    public List<RestoRes> findAllByRestoGrade() {
        List<RestoRes> restoResList = restoRepository.findAllByGrade(Grade.최강노포)
                .stream()
                .map(RestoRes::new)
                .collect(Collectors.toList());
        if(restoResList.isEmpty()) throw new CustomException(ErrorCode.RESTO_LiST_GET_ERROR);
        return restoResList;
    }

    @Override
    public List<RestoRes> orderByLikedCnt() {
        List<RestoRes> restoResList = restoQuerydslRepository.orderByLiked()
                .stream()
                .map(RestoRes::new)
                .collect(Collectors.toList());
        if(restoResList.isEmpty()) throw new CustomException(ErrorCode.RESTO_LiST_GET_ERROR);
        return restoResList;
    }

    @Override
    public List<RestoRes> recommendList() {
        return null;
    }
}

package com.ssafy.nopo.api.service;

import com.ssafy.nopo.api.response.RestoRes;
import com.ssafy.nopo.api.response.ReviewRes;
import com.ssafy.nopo.db.entity.OldRestaurant;
import com.ssafy.nopo.db.repository.RestoRepository;
import com.ssafy.nopo.db.repository.ReviewQuerydslRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class RestoServiceImpl implements RestoService{
    private final RestoRepository restoRepository;
    private final ReviewQuerydslRepository reviewQuerydslRepository;
    static Calendar now = Calendar.getInstance();
    @Override
    public RestoRes findByRestoId(int restoId) {
        OldRestaurant resto = restoRepository.findById(restoId).get();
        int year = now.get(Calendar.YEAR) - Integer.parseInt(resto.getYear());
        List<ReviewRes> review = reviewQuerydslRepository.
        return new RestoRes(restoId, year, resto.getThumbnail(), resto.getAddress(), resto.getRestoName(), resto.getSectors(),
                resto.getLocationX(), resto.getLocationY(), resto.getPhoneNumber(), resto.getMenu1(), resto.getMenu2(), String.valueOf(resto.getGrade()), );
    }

    @Override
    public List<ReviewRes> fingByRestoAge(int age) {
        return null;
    }

    @Override
    public List<ReviewRes> orderByLikedCnt() {
        return null;
    }

    @Override
    public List<ReviewRes> recommendList() {
        return null;
    }
}

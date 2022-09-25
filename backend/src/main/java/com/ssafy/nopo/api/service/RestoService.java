package com.ssafy.nopo.api.service;

import com.ssafy.nopo.api.response.RestoRes;
import com.ssafy.nopo.api.response.ReviewRes;

import java.util.List;

public interface RestoService {
    RestoRes findByRestoId(int restoId);
    List<ReviewRes> fingByRestoAge(int age);
    List<ReviewRes> orderByLikedCnt();
    List<ReviewRes> recommendList();
}

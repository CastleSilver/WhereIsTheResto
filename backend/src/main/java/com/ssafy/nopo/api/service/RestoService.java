package com.ssafy.nopo.api.service;

import com.ssafy.nopo.api.response.RestoListRes;
import com.ssafy.nopo.api.response.RestoRes;
import com.ssafy.nopo.api.response.ReviewRes;

import java.util.List;

public interface RestoService {
    RestoRes findByRestoId(int restoId);
    RestoListRes getRestoLists();
    List<RestoRes> findAllByRestoGrade();
    List<RestoRes> orderByLikedCnt();
    List<RestoRes> recommendList();
}

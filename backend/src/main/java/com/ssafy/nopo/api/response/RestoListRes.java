package com.ssafy.nopo.api.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RestoListRes {
    List<RestoRes> oldRestoList;
    List<RestoRes> popularList;
}

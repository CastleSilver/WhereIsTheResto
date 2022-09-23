package com.ssafy.nopo.api.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewRes {
    private int id;
    private List<String> imageUrl;
    private String content;
    private double rating;
    private String regDate;
    private String nickname;

}

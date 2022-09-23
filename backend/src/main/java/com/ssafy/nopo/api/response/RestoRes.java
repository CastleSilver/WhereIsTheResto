package com.ssafy.nopo.api.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class RestoRes {
    private int id;
    private int restoAge;
    private String thumbnail;
    private String address;
    private String name;
    private String sectors;
    private double locationX;
    private double locationY;
    private String phoneNumber;
    private String menu1;
    private String menu2;
    private String grade;
    private List<ReviewRes> review;
    private double rating;
}

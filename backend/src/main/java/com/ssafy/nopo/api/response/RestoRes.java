package com.ssafy.nopo.api.response;

import com.ssafy.nopo.db.entity.OldRestaurant;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
@AllArgsConstructor
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

    public RestoRes(OldRestaurant resto) {
        this.id = resto.getId();
        this.restoAge = Integer.parseInt(resto.getRestoAge());
        this.thumbnail = resto.getThumbnail();
        this.address = resto.getAddress();
        this.name = resto.getRestoName();
        this.sectors = resto.getSectors();
        this.locationX = resto.getLocationX();
        this.locationY = resto.getLocationY();
        this.phoneNumber = resto.getPhoneNumber();
        this.menu1 = resto.getMenu1();
        this.menu2 = resto.getMenu2();
        this.grade = String.valueOf(resto.getGrade());
        this.review = resto.getReviewList().stream().map(ReviewRes::new).collect(Collectors.toList());
        this.rating = getAvgRating(this.review);
    }

    public static double getAvgRating(List<ReviewRes> reviewList){
        double sumRating = 0;
        for(ReviewRes review : reviewList){
            sumRating += review.getRating();
        }
        return sumRating / reviewList.size();
    }

}

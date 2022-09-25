package com.ssafy.nopo.api.response;

import com.ssafy.nopo.db.entity.Review;
import com.ssafy.nopo.db.entity.ReviewImg;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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

    public ReviewRes(Review review) {
        id = review.getId();
        imageUrl = review.getImgList().stream().map(ReviewImg::getUrl).collect(Collectors.toList());
        content = review.getContent();
        rating = review.getRating();
        regDate = review.getRegdate().toString();
        nickname = review.getUser().getNickname();
    }
}

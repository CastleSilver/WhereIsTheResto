package com.ssafy.nopo.api.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class ReviewRes {
    private int id;
    private List<String> imageUrl;
    private String content;
    private Double rating;
    private String regDate;
    private String nickname;

    public ReviewRes(int id, List<String> imageUrl, String content, Double rating, String regDate, String nickname) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.content = content;
        this.rating = rating;
        this.regDate = regDate;
        this.nickname = nickname;
    }
}

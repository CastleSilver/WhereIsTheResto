package com.ssafy.nopo.api.response;

import com.ssafy.nopo.db.entity.Liked;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Getter
@NoArgsConstructor
@Slf4j
@AllArgsConstructor
public class LikedRes {
    private int id;
    private String name;
    private String imageUrl;
    private String address;
    private int age;

    public LikedRes(Liked like){
        this.id = like.getId();
        this.name = like.getResto().getRestoName();
        this.imageUrl = like.getResto().getThumbnail();
        this.address = like.getResto().getAddress();
        this.age = Integer.parseInt(like.getResto().getRestoAge());
    }

}

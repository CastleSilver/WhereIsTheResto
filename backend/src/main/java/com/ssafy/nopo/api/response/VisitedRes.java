package com.ssafy.nopo.api.response;

import com.ssafy.nopo.db.entity.Liked;
import com.ssafy.nopo.db.entity.Visited;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class VisitedRes {
    private int id;
    private String name;
    private String imageUrl;
    private String address;
    private int age;

    public VisitedRes(Visited visited){
        this.id = visited.getId();
        this.name = visited.getResto().getRestoName();
        this.imageUrl = visited.getResto().getThumbnail();
        this.address = visited.getResto().getAddress();
        this.age = Integer.parseInt(visited.getResto().getRestoAge());
    }
}

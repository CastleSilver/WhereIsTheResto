package com.ssafy.nopo.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@DynamicInsert
@Entity
@Table(name = "REVIEW")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 200, nullable = false)
    private String comment;

    @Column(nullable = false)
    private Double rating;

    @Column(nullable = false)
    private LocalDateTime regdate;

    // 회원 추가해야함

    // 노포 추가해야함

    @OneToMany(mappedBy = "review")
    private List<ReviewImg> imgList = new ArrayList<>();

    @Builder
    public Review(int id, String comment, Double rating, LocalDateTime regdate, List<ReviewImg> imgList) {
        this.id = id;
        this.comment = comment;
        this.rating = rating;
        this.regdate = regdate;
        this.imgList = imgList;
    }
}

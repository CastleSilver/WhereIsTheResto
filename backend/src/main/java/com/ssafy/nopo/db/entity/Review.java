package com.ssafy.nopo.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.data.annotation.CreatedDate;

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
    private String content;

    @Column(nullable = false)
    private Double rating;

    @CreatedDate
    @Column(nullable = false)
    private LocalDateTime regdate;

    // 회원 추가해야함

    // 노포 추가해야함

    @OneToMany(mappedBy = "review")
    private List<ReviewImg> imgList = new ArrayList<>();

    @Builder
    public Review(int id, String content, Double rating, LocalDateTime regdate, List<ReviewImg> imgList) {
        this.id = id;
        this.content = content;
        this.rating = rating;
        this.regdate = regdate;
        this.imgList = imgList;
    }
}

package com.ssafy.nopo.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@DynamicUpdate
@Entity
@Table(name = "REVIEW")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 200, nullable = false)
    private String content;

    @Column(nullable = false)
    private double rating;

    @CreatedDate
    @Column(nullable = false)
    private LocalDateTime regdate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "resto_id")
    private OldRestaurant resto;

    @OneToMany(mappedBy = "review")
    private List<ReviewImg> imgList = new ArrayList<>();

    @Builder
    public Review(int id, String content, double rating, LocalDateTime regdate, User user, OldRestaurant resto, List<ReviewImg> imgList) {
        this.id = id;
        this.content = content;
        this.rating = rating;
        this.regdate = regdate;
        this.user = user;
        this.resto = resto;
        this.imgList = imgList;
    }

    public void update(String content, double rating) {
        this.content = content;
        this.rating = rating;
    }
}

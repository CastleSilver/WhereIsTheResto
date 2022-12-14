package com.ssafy.nopo.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity
@DynamicUpdate
@Table(name = "REVIEW")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 500, nullable = false)
    private String content;

    @Column(nullable = false)
    private double rating;

    @Column(nullable = false)
    private LocalDateTime regdate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;

    @ManyToOne
    @JoinColumn(name = "resto_id")
    private OldRestaurant resto;

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL)
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

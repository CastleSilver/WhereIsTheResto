package com.ssafy.nopo.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@DynamicInsert
@Entity
@Table(name = "REVIEW_IMG")
public class ReviewImg {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "rev_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Review review;

    @Column(length = 200, nullable = false)
    private String url;

    @Builder
    public ReviewImg(int id, Review review, String url) {
        this.id = id;
        this.review = review;
        this.url = url;
    }
}

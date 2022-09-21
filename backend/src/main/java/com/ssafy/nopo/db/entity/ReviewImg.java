package com.ssafy.nopo.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.data.annotation.Id;

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

    @ManyToOne
    @JoinColumn(name = "rev_id")
    private Review review;

    @Column(length = 200, nullable = false)
    private String url;
}

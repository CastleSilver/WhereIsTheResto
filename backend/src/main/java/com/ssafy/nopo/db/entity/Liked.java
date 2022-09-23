package com.ssafy.nopo.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@DynamicInsert
@Entity
@Table(name = "LIKED")
public class Liked {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "resto_id")
    private OldRestaurant nopo;

    public Liked(int id, User user, OldRestaurant nopo) {
        this.id = id;
        this.user = user;
        this.nopo = nopo;
    }
}

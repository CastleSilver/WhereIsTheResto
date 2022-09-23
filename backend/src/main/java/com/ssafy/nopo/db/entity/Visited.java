package com.ssafy.nopo.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Getter
@NoArgsConstructor
@DynamicInsert
@Entity
@Table(name = "VISITED")
public class Visited {

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "resto_id")
    private OldRestaurant nopo;

    public Visited(User user, OldRestaurant nopo) {
        this.user = user;
        this.nopo = nopo;
    }
}

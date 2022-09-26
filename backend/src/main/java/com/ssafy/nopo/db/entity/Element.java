package com.ssafy.nopo.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@DynamicUpdate
@Entity
@Table(name = "element")
public class Element {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int terrace;

    private int drinking;

    private int meal;

    private int lunch;

    private int dinner;

    @Column(name = "cost_effective")
    private int costEffective;

    private int classy;

    private int mood;

    private int noisy;

    private int quiet;

    @Column(name = "real_local")
    private int realLocal;

    @OneToOne(mappedBy = "element")
    private OldRestaurant resto;

    @Builder
    public Element(int id, int terrace, int drinking, int meal, int lunch, int dinner, int costEffective, int classy, int mood, int noisy, int quiet, int realLocal, OldRestaurant resto) {
        this.id = id;
        this.terrace = terrace;
        this.drinking = drinking;
        this.meal = meal;
        this.lunch = lunch;
        this.dinner = dinner;
        this.costEffective = costEffective;
        this.classy = classy;
        this.mood = mood;
        this.noisy = noisy;
        this.quiet = quiet;
        this.realLocal = realLocal;
        this.resto = resto;
    }
}

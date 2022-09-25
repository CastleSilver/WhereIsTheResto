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
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "gu_id")
    private Gu gu;

    @Column(length = 10)
    private String dong;

    @Builder
    public Address(int id, Gu gu, String dong) {
        this.id = id;
        this.gu = gu;
        this.dong = dong;
    }
}

package com.ssafy.nopo.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Getter
@Table(name = "AZTI")
@NoArgsConstructor
@DynamicInsert
@Entity
public class AZTI {

    @Id
    @GeneratedValue
    private Long id;        // DB AUTO_INCREMENT 작업을 DB 테이블에서 수행

    private int type;       // AZTI 타입

    @Builder
    public AZTI(Long id, int type) {
        this.id = id;
        this.type = type;
    }
}



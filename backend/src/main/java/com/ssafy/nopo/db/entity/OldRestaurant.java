package com.ssafy.nopo.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@DynamicInsert
@Entity
@Table(name = "OLD_RESTAURANT")
public class OldRestaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "rest_age", length = 4)
    private String restoAge;    // 인허가등록 년도

    private String thumbnail;   // 식당 사진 썸네일

    private String address;     // 지번 주소

    private String restoName;   // 식당 이름

    private String sectors;     // 업종

    private double locationX;   // 좌표정보 X

    private double locationY;   // 좌표정보 Y

    private String phoneNumber; // 가게 전화번호

    private String menu1;       // 대표 메뉴1

    private String menu2;       // 대표 메뉴2

    private int terrace;        // 야외좌석 유무

    private String grade;       // 노포 등급

    @OneToMany(mappedBy = "")
    private List<Visited> visitedList = new ArrayList<>();

    @OneToMany(mappedBy = "")
    private List<Liked> likedList = new ArrayList<>();




}

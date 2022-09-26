package com.ssafy.nopo.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@DynamicUpdate
@Entity
@Table(name = "old_restaurant")
public class OldRestaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 4)
    private String year;

    @Column(length = 200)
    private String thumbnail;

    @Column(nullable = false, length = 300)
    private String address;

    @Column(name = "resto_name", nullable = false, length = 100)
    private String restoName;

    @Column(nullable = false, length = 10)
    private String sectors;

    @Column(name = "location_x")
    private double locationX;

    @Column(name = "location_y")
    private double locationY;

    @Column(name = "phone_number", length = 50)
    private String phoneNumber;

    @Column(length = 50)
    private String menu1;

    @Column(length = 50)
    private String menu2;

    @Column(length = 10)
    @Enumerated(EnumType.STRING)
    private Grade grade;

    @ManyToOne
    @JoinColumn(name = "addr_id")
    private Address dong;

    @OneToOne
    @JoinColumn(name = "ele_id")
    private Element element;

    @OneToMany(mappedBy = "resto")
    private List<Review> reviewList = new ArrayList<>();

    @OneToMany(mappedBy = "resto")
    private List<Visited> visitedList = new ArrayList<>();

    @OneToMany(mappedBy = "resto")
    private List<Liked> likedList = new ArrayList<>();

    @Builder
    public OldRestaurant(int id, String year, String thumbnail, String address, String restoName, String sectors, double locationX, double locationY, String phoneNumber, String menu1, String menu2, Grade grade, Address dong, Element element, List<Review> reviewList, List<Visited> visitedList, List<Liked> likedList) {
        this.id = id;
        this.year = year;
        this.thumbnail = thumbnail;
        this.address = address;
        this.restoName = restoName;
        this.sectors = sectors;
        this.locationX = locationX;
        this.locationY = locationY;
        this.phoneNumber = phoneNumber;
        this.menu1 = menu1;
        this.menu2 = menu2;
        this.grade = grade;
        this.dong = dong;
        this.element = element;
        this.reviewList = reviewList;
        this.visitedList = visitedList;
        this.likedList = likedList;
    }
}


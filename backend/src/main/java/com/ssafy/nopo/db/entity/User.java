package com.ssafy.nopo.db.entity;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Getter
@Table(name = "User")
@NoArgsConstructor
@DynamicInsert
@Data
@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;

    @Column(length = 30, nullable = false, unique = true)
    private String nickname;

    @Column(length = 30)
    private String email;

    @Column(length = 1)
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(length = 3)
    private int age;

    @Column(name = "profile_image", length = 250)
    private String profileImage;

    @Column(length = 5)
    private String role;

    @Column(length = 10)
    @Enumerated(EnumType.STRING)
    private AZTI aztiType;

    private String socialId;

    private String refreshToken;

//    @ManyToOne
//    @JoinColumn(name = "AZTI_id")
//    private AZTI azti;

    @Builder
    public User(Long id, String nickname, String email, Gender gender, int age, AZTI aztiType, String role, String profileImage) {
        this.id = id;
        this.nickname = nickname;
        this.email = email;
        this.gender = gender;
        this.age = age;
        this.profileImage = profileImage;
        this.role = role;
        this.aztiType = aztiType;
        this.role = role;
    }

    public static enum Gender {
        M, F, X;
    }

    public static enum AZTI {
        M, F, X;
    }
}

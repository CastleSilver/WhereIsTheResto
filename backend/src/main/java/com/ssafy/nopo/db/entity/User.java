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
    //@Column(length = 13, nullable = false)

    @Column(length = 30, nullable = false)
    private String nickname;

    @Column(length = 30)
    private String email;

    private String socialId;

    @Column(length = 1)
    @Enumerated(EnumType.STRING)
    private String gender;

    @Column(length = 5)
    @Enumerated(EnumType.STRING)
    private String role;

    @Column(length = 3)
    private int age;

    @ManyToOne
    @JoinColumn(name = "AZTI_id")
    private AZTI azti;

    private String refreshToken;

    @Builder
    public User(Long id, String nickname, String email, String gender, int age, AZTI azti, String role) {
        this.id = id;
        this.nickname = nickname;
        this.email = email;
        this.gender = gender;
        this.age = age;
        this.role = role;
        this.azti = azti;
        this.role = role;
    }
}

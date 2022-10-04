package com.ssafy.nopo.db.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Table(name = "User")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@DynamicInsert
@Data
@Entity
public class User {

    @Id
    @Setter (AccessLevel.NONE)
    private String id;

    @Column(length = 30, nullable = false)
    private String nickname;

    @Column(length = 30)
    private String email;

    private String gender;

    @Column(name = "profile_image", length = 250)
    private String profileImage;

    @Column(length = 5)
    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(length = 10)
    @Enumerated(EnumType.STRING)
    private AZTI aztiType;

    private String refreshToken;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Liked> likedList = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Visited> visitedList = new ArrayList<>();

    @Builder
    public User(String id, String nickname, String email, String gender, AZTI aztiType, Role role, String profileImage) {
        this.id = id;
        this.nickname = nickname;
        this.email = email;
        this.gender = gender;
        this.profileImage = profileImage;
        this.role = role;
        this.aztiType = aztiType;
    }

    public void update(AZTI aztiType) {
        this.aztiType = aztiType;
    }
}

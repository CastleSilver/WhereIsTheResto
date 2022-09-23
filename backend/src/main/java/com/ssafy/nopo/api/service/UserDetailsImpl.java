package com.ssafy.nopo.api.service;

import com.ssafy.nopo.db.entity.User;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Data
public class UserDetailsImpl implements UserDetails {       // 실제 로그인에 사용할 클래스
    private static final long serialVersionUID = 1L;

    private Long id;
    private String nickname;
    private String email;
    private User.Gender gender;
    private int age;
    private User.AZTI aztiType;
    private Collection<? extends GrantedAuthority> authorities;     // 권한

    public UserDetailsImpl(Long id, String nickname, String email, User.Gender gender, int age, User.AZTI aztiType) {
        this.id = id;
        this.nickname = nickname;
        this.email = email;
        this.gender = gender;
        this.age = age;
        this.aztiType = aztiType;
    }

    public static UserDetailsImpl build(User user){

        return new UserDetailsImpl(
                user.getId(),
                user.getNickname(),
                user.getEmail(),
                user.getGender(),
                user.getAge(),
                user.getAztiType()
        );
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    public Long id(){ return this.id; }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    public String getNickname() {
        return nickname;
    }

    public User.Gender getGender() {
        return gender;
    }

    public int getAge() {
        return age;
    }

    public User.AZTI getAztiType() {
        return aztiType;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String toString() {
        return "UserDetailsImpl{" +
                "id='" + id + '\'' +
                ", nickname='" + nickname + '\'' +
                ", email='" + email + '\'' +
                ", gender='" + gender + '\'' +
                ", age=" + age +
                ", azti=" + aztiType +
                ", authorities=" + authorities +
                '}';
    }
}

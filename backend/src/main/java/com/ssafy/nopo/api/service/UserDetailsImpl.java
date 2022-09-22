package com.ssafy.nopo.api.service;

import com.ssafy.nopo.db.entity.AZTI;
import com.ssafy.nopo.db.entity.User;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Data
public class UserDetailsImpl implements UserDetails {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String nickname;
    private String email;
    private String gender;
    private int age;
    private AZTI azti;
    private Collection<? extends GrantedAuthority> authorities;

    public UserDetailsImpl(Long id, String nickname, String email, String gender, int age, AZTI azti) {
        this.id = id;
        this.nickname = nickname;
        this.email = email;
        this.gender = gender;
        this.age = age;
        this.azti = azti;
    }

    public static UserDetailsImpl build(User user){

        return new UserDetailsImpl(
                user.getId(),
                user.getNickname(),
                user.getEmail(),
                user.getGender(),
                user.getAge(),
                user.getAzti()
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

    public String getGender() {
        return gender;
    }

    public int getAge() {
        return age;
    }

    public AZTI getAzti() {
        return azti;
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
                ", azti=" + azti +
                ", authorities=" + authorities +
                '}';
    }
}

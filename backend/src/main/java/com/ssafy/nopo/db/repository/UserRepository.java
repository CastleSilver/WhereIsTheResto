package com.ssafy.nopo.db.repository;

import com.ssafy.nopo.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User save(User user);
    User getOne(Long userId);
    //Optional<User> findBySocialId(String socialId);
    Optional<User> findByEmail(String email);
    User findByNickname(String nickname);
    boolean existsByEmail(String email);
    boolean existsByNickname(String nickname);

    ArrayList<User> findByNicknameContains(String keyword);
    Optional<User> findBySocialId(String socialId);
}

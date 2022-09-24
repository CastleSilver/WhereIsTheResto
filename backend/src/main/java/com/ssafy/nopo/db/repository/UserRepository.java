package com.ssafy.nopo.db.repository;

import com.ssafy.nopo.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

    //User save(User user);
    User getOne(String userId);
    Optional<User> findByEmail(String email);
    User findByNickname(String nickname);
    boolean existsByEmail(String email);
    boolean existsByNickname(String nickname);

    ArrayList<User> findByNicknameContains(String keyword);
    //Optional<User> findBySocialId(String socialId);
}

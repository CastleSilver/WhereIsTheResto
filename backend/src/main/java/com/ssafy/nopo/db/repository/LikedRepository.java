package com.ssafy.nopo.db.repository;

import com.ssafy.nopo.db.entity.Liked;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikedRepository extends JpaRepository<Liked, Integer> {
    List<Liked> findAllByUserId(String userId);
}

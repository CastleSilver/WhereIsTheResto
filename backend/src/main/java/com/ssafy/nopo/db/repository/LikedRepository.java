package com.ssafy.nopo.db.repository;

import com.ssafy.nopo.db.entity.Liked;
import com.ssafy.nopo.db.entity.Visited;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LikedRepository extends JpaRepository<Liked, Integer> {
    List<Liked> findAllByUserId(String userId);
    Optional<Liked> findByRestoIdAndUserId(int restoId, String userId);
    long countByRestoId(int restoId);
}

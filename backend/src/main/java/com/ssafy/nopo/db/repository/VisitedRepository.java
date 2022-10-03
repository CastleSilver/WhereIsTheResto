package com.ssafy.nopo.db.repository;

import com.ssafy.nopo.db.entity.Liked;
import com.ssafy.nopo.db.entity.Review;
import com.ssafy.nopo.db.entity.Visited;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VisitedRepository extends JpaRepository<Visited, Integer> {
    List<Visited> findAllByUserId(String userId);
    Optional<Visited> findByRestoIdAndUserId(int restoId, String userId);
    long countByRestoId(int restoId);
}

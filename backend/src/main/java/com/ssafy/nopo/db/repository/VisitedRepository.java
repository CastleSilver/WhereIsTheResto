package com.ssafy.nopo.db.repository;

import com.ssafy.nopo.db.entity.Liked;
import com.ssafy.nopo.db.entity.Visited;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VisitedRepository extends JpaRepository<Visited, Integer> {
    List<Visited> findAllByUserId(String userId);
}

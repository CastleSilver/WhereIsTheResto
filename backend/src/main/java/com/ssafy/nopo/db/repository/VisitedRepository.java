package com.ssafy.nopo.db.repository;

import com.ssafy.nopo.db.entity.Visited;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VisitedRepository extends JpaRepository<Visited, Integer> {
}

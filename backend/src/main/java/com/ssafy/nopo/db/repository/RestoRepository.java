package com.ssafy.nopo.db.repository;

import com.ssafy.nopo.db.entity.OldRestaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestoRepository extends JpaRepository<OldRestaurant, Integer> {
}

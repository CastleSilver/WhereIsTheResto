package com.ssafy.nopo.db.repository;

import com.ssafy.nopo.db.entity.Grade;
import com.ssafy.nopo.db.entity.OldRestaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.awt.*;
import java.util.List;

@Repository
public interface RestoRepository extends JpaRepository<OldRestaurant, Integer> {
    List<OldRestaurant> findAllByGrade(Grade grade);
}

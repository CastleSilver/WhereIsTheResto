package com.ssafy.nopo.db.repository;

import com.ssafy.nopo.db.entity.OldRestaurant;
import com.ssafy.nopo.db.entity.Review;
import com.ssafy.nopo.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {
    Optional<Review> findByRestoIdAndUserId(OldRestaurant resto, User user);
    List<Review> findAllByRestoId(OldRestaurant restoId);
}

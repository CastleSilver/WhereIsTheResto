package com.ssafy.nopo.db.repository;

import com.ssafy.nopo.api.response.LoginLogResponse;
import com.ssafy.nopo.db.entity.LoggedIn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public interface LoggedInRepository extends JpaRepository<LoggedIn, Long> {

    @Query("select date as date from LoggedIn l where l.user.id = :userId order by l.date")
    ArrayList<LoginLogResponse> getLoginLog(@Param("userId") Long userId);

    @Query("select distinct function('date_format', l.date, '%Y-%m-%d') as date from LoggedIn l where l.user.id = :userId order by l.date")
    ArrayList<String> getLoginDateLog(@Param("userId") Long userId);

    @Query("select distinct function('date', l.date) as date from LoggedIn l " +
            "where l.user.id = :userId and l.date > :weekAge order by l.date")
    List<LoginLogResponse> getWeekLoginDateLog(@Param("userId") Long userId, @Param("weekAge") LocalDateTime weekAge);

}

package com.ssafy.nopo.db.repository;

import com.ssafy.nopo.db.entity.LoggedContinue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoggedContinueRepository extends JpaRepository<LoggedContinue, String> {
    LoggedContinue save(LoggedContinue loggedContinue);

    LoggedContinue findByUserId(String userId);
}

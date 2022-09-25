package com.ssafy.nopo.api.service;

import com.ssafy.nopo.api.request.VisitedRequest;
import com.ssafy.nopo.db.entity.Visited;
import com.ssafy.nopo.db.repository.OldRestoRepository;
import com.ssafy.nopo.db.repository.UserRepository;
import com.ssafy.nopo.db.repository.VisitedRepository;
import com.ssafy.nopo.db.repository.querydslRepo.VisitedQuerydslRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class VisitedService {

    private final OldRestoRepository oldRestoRepository;
    private final UserRepository userRepository;
    private final VisitedRepository visitedRepository;
    private final VisitedQuerydslRepository visitedQuerydslRepository;

    public int addVisitedResto(VisitedRequest visitedRequest){

        Visited visited = Visited.builder()
                .resto(oldRestoRepository.findById(visitedRequest.getRestoId()).get())
                .user(userRepository.findById(visitedRequest.getUserId()).get())
                .build();

        visitedRepository.save(visited);
        return visited.getId();
    }

    public boolean deleteVisitedResto(VisitedRequest visitedRequest){
        Visited visited = visitedQuerydslRepository.findByUserIdAndRestoId(visitedRequest.getUserId(), visitedRequest.getRestoId());
        if (visited != null) {
            visitedRepository.delete(visited);
            return true;
        }
        return false;
    }
}

package com.ssafy.nopo.api.service;

import com.ssafy.nopo.api.request.LikedRequest;
import com.ssafy.nopo.db.entity.Liked;
import com.ssafy.nopo.db.repository.LikedRepository;
import com.ssafy.nopo.db.repository.OldRestoRepository;
import com.ssafy.nopo.db.repository.UserRepository;
import com.ssafy.nopo.db.repository.querydslRepo.LikedQuerydslRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class LikedService {

    private final OldRestoRepository oldRestoRepository;
    private final UserRepository userRepository;
    private final LikedRepository likedRepository;
    private final LikedQuerydslRepository likedQuerydslRepository;

    public int addLikedResto(LikedRequest likedRequest){

        Liked liked = Liked.builder()
                .resto(oldRestoRepository.findById(likedRequest.getRestoId()).get())
                .user(userRepository.findById(likedRequest.getUserId()).get())
                .build();

        likedRepository.save(liked);
        return liked.getId();
    }

    @Transactional
    public void deleteLikedResto(LikedRequest likedRequest){
        Liked liked = likedQuerydslRepository.findByUserIdAndRestoId(likedRequest.getUserId(), likedRequest.getRestoId());
        likedRepository.deleteById(liked.getId());
    }
}

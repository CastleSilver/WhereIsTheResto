package com.ssafy.nopo.client;

import com.ssafy.nopo.db.entity.User;

public interface ClientProxy {

    User getUserData(String accessToken);
}

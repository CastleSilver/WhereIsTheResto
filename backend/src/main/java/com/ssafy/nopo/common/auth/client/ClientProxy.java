package com.ssafy.nopo.common.auth.client;

import com.ssafy.nopo.db.entity.User;

public interface ClientProxy {

    User getUserData(String accessToken);
}

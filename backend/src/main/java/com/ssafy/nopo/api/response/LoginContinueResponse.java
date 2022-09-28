package com.ssafy.nopo.api.response;

import com.ssafy.nopo.db.entity.LoggedContinue;
import lombok.Data;

@Data
public class LoginContinueResponse {

    private int consecutively;
    private int maxConsecutively;

    public static LoginContinueResponse generateLoginContinueDto(LoggedContinue loggedContinue) {
        LoginContinueResponse loginContinueDto = new LoginContinueResponse();
        loginContinueDto.setConsecutively(loggedContinue.getConsecutively());
        loginContinueDto.setMaxConsecutively(loggedContinue.getMaxConsecutively());
        return loginContinueDto;
    }
}

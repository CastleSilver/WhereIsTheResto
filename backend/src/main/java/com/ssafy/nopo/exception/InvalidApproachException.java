package com.ssafy.nopo.exception;

public class InvalidApproachException extends RuntimeException{

    public InvalidApproachException() {
        super();
    }

    public InvalidApproachException(String message) {
        super(message);
    }

    public InvalidApproachException(String message, Throwable cause) {
        super(message, cause);
    }

    public InvalidApproachException(Throwable cause) {
        super(cause);
    }

    protected InvalidApproachException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
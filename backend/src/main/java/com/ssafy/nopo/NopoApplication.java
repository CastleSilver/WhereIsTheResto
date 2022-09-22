package com.ssafy.nopo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class NopoApplication {

	public static void main(String[] args) {
		SpringApplication.run(NopoApplication.class, args);
	}

}

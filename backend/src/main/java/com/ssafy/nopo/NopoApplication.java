package com.ssafy.nopo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class NopoApplication {

	public static void main(String[] args) {

		SpringApplication.run(NopoApplication.class, args);
		System.out.println("main");
	}

}

package com.market.saas;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
//@EnableCassandraRepositories(basePackages = "com.Auto.App.Entity")
@ComponentScan(basePackages = {"com.market.saas"})
@EntityScan(basePackages = {"com.market.saas.Entity"})
@RequiredArgsConstructor
public class SaasApplication {
	public static void main(String[] args) {
		SpringApplication.run(SaasApplication.class, args);
	}

}

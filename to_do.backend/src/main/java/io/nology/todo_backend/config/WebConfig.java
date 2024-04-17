package io.nology.todo_backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	public void addCorsMappings(CorsRegistry registry) {
		String[] allowedOrigins = { "http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000", "http://localhost:9191", "https://main--benevolent-narwhal-c09433.netlify.app" };
		registry.addMapping("/**").allowedOrigins(allowedOrigins)
				.allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS").allowedHeaders("*");
	}
}
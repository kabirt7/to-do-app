package io.nology.todo_backend.posts;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateToDoItemDTO {
	
	@NotNull
	private Boolean completed;
	
	@NotBlank
	private String content;

	public Boolean getCompleted() {
		return completed;
	}

	public String getContent() {
		return content;
	}
	
	public Boolean setCompleted() {
		return completed;
	}

	public String setContent() {
		return content;
	}
	
	

}

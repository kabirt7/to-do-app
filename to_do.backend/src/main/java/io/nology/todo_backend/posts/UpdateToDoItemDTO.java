package io.nology.todo_backend.posts;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public class UpdateToDoItemDTO {
	
    private Boolean completed;
	
	@Pattern(regexp = "^(?=\\S).*$", message="content cannot be empty")
	private String content;
	
	public Boolean getCompleted() {
		return completed;
	}

	public String getContent() {
		return content;
	}

	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}

	public void setContent(String content) {
		this.content = content;
	}

	
}

package io.nology.todo_backend.posts;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "to_dos")
@AllArgsConstructor
@NoArgsConstructor
public class ToDoItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private Boolean completed;
	
	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String content;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column (nullable = false, updatable = false)
	private Date createdAt;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column
	private Date updatedAt;
	
	@PrePersist
	public void onCreate() {
		Date timestamp = new Date();
		createdAt = timestamp;
		updatedAt = timestamp;
	}
	
	@PreUpdate
	public void onUpdate() {
		updatedAt = new Date();
	}

	public Long getId() {
		return id;
	}

	public Boolean getCompleted() {
		return completed;
	}

	public String getContent() {
		return content;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}

	public void setContent(String content) {
		this.content = content;
	}



}

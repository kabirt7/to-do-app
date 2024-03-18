package io.nology.todo_backend.posts;


import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/items")
public class ToDoItemController {
	
	 private static final Logger logger = LoggerFactory.getLogger(ToDoItemController.class);
	
	@Autowired
	private ToDoItemService toDoItemService;
	
	@PostMapping
	public ResponseEntity<ToDoItem> createPost(@Valid @RequestBody CreateToDoItemDTO data) {
		logger.info("Creating a new ToDoItem");
		ToDoItem createdItem = this.toDoItemService.createItem(data);
	
		logger.info("ToDoItem created successfully");
		return new ResponseEntity<>(createdItem, HttpStatus.CREATED);
		
	}
	
	@GetMapping
	public ResponseEntity<List<ToDoItem>> getAllPosts() {
		logger.info("Fetching all ToDoItems");
		List<ToDoItem> allItems = this.toDoItemService.getAll();
		
		logger.info("Fetched all ToDoItems successfully");
		return new ResponseEntity<>(allItems, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	// @pathvar allows access to {id}, similar to useParams()
	public ResponseEntity<ToDoItem> getItemById(@PathVariable Long id) {
		logger.info("Fetching ToDoItem by ID: {}", id);
		Optional<ToDoItem> maybeItem = this.toDoItemService.findItemById(id);
		
		if (maybeItem.isPresent()) {
            ToDoItem foundItem = maybeItem.get();
            logger.info("ToDoItem found successfully");
            return new ResponseEntity<>(foundItem, HttpStatus.OK);
        } else {
            logger.warn("ToDoItem not found by ID: {}", id);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<ToDoItem> updateItemById(@Valid @RequestBody UpdateToDoItemDTO data, @PathVariable Long id) {
		logger.info("Updating ToDoItem by ID: {}", id);
		Optional<ToDoItem> maybeUpdatedItem = this.toDoItemService.updateById(data, id);
		
		if (maybeUpdatedItem.isPresent()) {
            ToDoItem foundItem = maybeUpdatedItem.get();
            logger.info("ToDoItem updated successfully");
            return new ResponseEntity<>(foundItem, HttpStatus.OK);
        } else {
        	logger.warn("ToDoItem not found for update by ID: {}", id);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
	}
	

    @PatchMapping("/{id}/toggle")
    public ResponseEntity<ToDoItem> toggleItemCompleted(@PathVariable Long id) {
        logger.info("Toggling ToDoItem completion status by ID: {}", id);
        Optional<ToDoItem> maybeToggledItem = this.toDoItemService.toggleItemCompleted(id);

        if (maybeToggledItem.isPresent()) {
            ToDoItem toggledItem = maybeToggledItem.get();
            logger.info("ToDoItem completion status toggled successfully");
            return new ResponseEntity<>(toggledItem, HttpStatus.OK);
        } else {
            logger.warn("ToDoItem not found for toggle by ID: {}", id);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

	
	@DeleteMapping("/{id}")
	public ResponseEntity<ToDoItem> deletePostById(@PathVariable Long id) {
		logger.info("Deleting ToDoItem by ID: {}", id);
		boolean deleted = this.toDoItemService.deletePostById(id);
		
		if (!deleted) {
		    logger.warn("ToDoItem not found for deletion by ID: {}", id);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
   	    logger.info("ToDoItem deleted successfully");
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}
}

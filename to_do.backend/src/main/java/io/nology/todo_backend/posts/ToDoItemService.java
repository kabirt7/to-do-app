package io.nology.todo_backend.posts;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class ToDoItemService {
	
	private static final Logger logger = LoggerFactory.getLogger(ToDoItemService.class);
	
    @Autowired
    private ToDoItemRepository repo;
    
    @Autowired 
    private ModelMapper mapper;
    
    public ToDoItem createItem(CreateToDoItemDTO data) {
    	logger.info("Creating a new ToDoItem");
    	// add validation errors
    	
    	ToDoItem newItem = mapper.map(data, ToDoItem.class);
    	
    	logger.info("ToDoItem created successfully");
    	return this.repo.save(newItem);
    }
    
    public List<ToDoItem> getAll() {
    	logger.info("Fetching all ToDoItems");
    	return this.repo.findAll();
    }
    
    public Optional<ToDoItem> findItemById(Long id) {
    	logger.info("Fetching ToDoItem by ID: {}", id);
    	return this.repo.findById(id);
    }
    
    public Optional<ToDoItem> updateById(@Valid UpdateToDoItemDTO data, Long id) {
    	logger.info("Updating ToDoItem by ID: {}", id);
    	
    	Optional<ToDoItem> maybeItem = this.findItemById(id);
    	
    	if (maybeItem.isEmpty()) {
    		logger.warn("ToDoItem not found for update by ID: {}", id);
    		return maybeItem;
    	}
    	
    	ToDoItem foundItem = maybeItem.get();
    	
    	mapper.map(data, foundItem);
    	
    	ToDoItem updatedItem = this.repo.save(foundItem);
    	
    	logger.info("ToDoItem updated successfully");
    	return Optional.of(updatedItem);
    }
    
    public Optional<ToDoItem> toggleItemCompleted(Long id) {
        logger.info("Toggling ToDoItem completion status by ID: {}", id);

        Optional<ToDoItem> maybeItem = this.findItemById(id);
        
        if (maybeItem.isPresent()) {
            ToDoItem item = maybeItem.get();
            item.setCompleted(!item.getCompleted()); 
            ToDoItem updatedItem = this.repo.save(item);

            logger.info("ToDoItem completion status toggled successfully");
            return Optional.of(updatedItem);
        } else {
            logger.warn("ToDoItem not found for toggle by ID: {}", id);
            return Optional.empty();
        }
    }

    
    public boolean deletePostById(Long id) {
    	logger.info("Deleting ToDoItem by ID: {}", id);
    	Optional<ToDoItem> maybeItem = this.repo.findById(id);
    	if (maybeItem.isEmpty()) {
    		logger.warn("ToDoItem not found for deletion by ID: {}", id);
    		return false;
    	}
    	this.repo.delete(maybeItem.get());
    	logger.info("ToDoItem deleted successfully");
    	return true;
    }

}

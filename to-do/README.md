# TO DO

**FUTURE**
- Toast notifications 
- Finish front end
- Error handling in spring
- Swagger on spring 
- React testing 
- Styling 

**LOG**
**4/4/24**
- today I tried to integrate the edit and add Modal into my project
  
- I encountered some issues:
- I tried to use Generic buttons in a use case where it makes more sense to use unique buttons (it feels redundant to make a reusable CRUD Modal using an adjoining generic Button Class - will need to verify this)
- TypeScript is still a bit of a mystery to me in terms of knowing the different functions' types (spefically need to remember what setState functions types are as I'm sure I'm going to use this a lot in future)
- Do I need to use a react hook form to continously update a container state with the typed input from the CRUD Modal? Maybe I could make it so that when the add item/edit item functions are fired - they set the state. But then the triggering of the functions will need to be in a useEffect which complicates how I'm dealing with them separatety. I could add a control state that indicates which but this all seems like more work than the continuous updates. So in conclusion I think yes.
- I also thought i needed to deal with pre loading the post to the edit typed CRUD Modal it but now I'm realising for MVP I can get away with not doing that. I will add this later but I want to get all the CRUD functions integrated tomorrow
- I eventually need to add Toast Notifications also, for tomorrow I will just alert / console.log the error messages


**TOMORROW**
- Separate out the buttons and simplify how their functions are called (deal with typing)
- Continuously set the inputState when input changes
- Integrate in the Add and Edit Modals
- Style these buttons
- Integrate in delete functionality


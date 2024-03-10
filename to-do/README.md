# TO DO
**FUTURE**
- Finish front end Styling
- Custom Error handling in Spring 
- Update React testing 
- Complete Readme

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

**LOG**
**5/4/24**
- today went well, logging everything I had to do today last night was super helpful

ACHIEVED:
- fixed the CRUD Modal including making unique buttons (their typing was a lot easier when I handled all the logic in the container functions)
- fixed the typing and simplified the generic Button component
- Used the Controller component from RHF to automatically setState each time a letter is typed into the CRUD Modal. Set this to the passed down state from the container
- Wrote the Edit, Delete and Add CRUD logic in my ts file
- Used the container state to appropriately fire the CRUD functions and hence the CRUD logic
- Updated Modal styling
- BASIC FUNCTIONALITY COMPLETE

**TOMORROW**
- focus on error handling, this is something in future I need to implement as I go. I've been focussing on wrapping my head around making generic components in TSX but I feel confident with that now

- if I get time it would be great to add Vitest testing initial config

- add strikethrough functionality to the front-end

FRONT END E.H.
- my logic.ts file throws errors with very little detail, this can be easily updated. The same needs to be done for the container functions that fire them
- validation for if the message is too long. This will be on backend too but I think I remember Alex saying to do this on front-end too
- research logging strategy

BACK END E.H.
- need to implement a global exception handler
- figure out how to validate the Boolean Column Completed

**LOG**
**6/4/24**
- going to use the basic logging that comes with spring-boot-starter-parent. I think I'll just need to describe what the functions are doing

ACHIEVED:
- refined error descriptions in my crud-logic.ts file and how they're handled in the container component
- reviewed error handling in Spring. In future, I would like to use Global Exception Handling and subsequent error classes. However, for the scope of this project - I am happy with the handling currently implemented
- Implemented Swagger functionality on the backend. Learned that Springfox is outdated and incompatible for the vesion of Springboot that I'm using. Classmate suggested using "springdoc-openapi-starter-webmvc-ui" instead and it worked great
- Implemented a logging strategy on the back-end whereby I log the different steps involved in API request/responses. I used the default logging that didn't require any new dependencies (I think it came from 'spring-boot-starter-parent')
- Researched Vitest and React Test Library

**TOMORROW**
- Implement React testing to all components used - research Vitest further
- Make the strikethrough functionality functional
- Front-end finish styling

**LOG**
**7/4/24**
- Testing API mock calls was a bit challenging and time-consuming
- act and waitFor were very important to my implementations

ACHIEVED:
- Added testing to my logic and react components - testing for ts was different to tsx. Used React Test Lib, Vitest & Jest
- Added Strikethrough functionality to the To Do Item component
- Added Strikethrough function to Controller and Service Layers of backend

**TOMORROW**
- Add in Context 
- Add Toast Notifcation component and use context to call this
- Use Context to blur out background when modal is open 
- Add in Zod error handling to RHF
- Styling finishing touches

**LOG**
**8/4/24**

ACHIEVED:
- Added in Context
- Added Toast Component Notifications
- Decided not to use Zod for now as the way it TSX and the Controller Component interact is complex
- some styling changes
  
**LOG**
**9/4/24**
ACHIEVED: 
- Added testing for Toast Component

ISSUES:
- struggling to get time-out test to work for TC
=======

- add strikethrough functionality to the front-end

FRONT END E.H.
- my logic.ts file throws errors with very little detail, this can be easily updated. The same needs to be done for the container functions that fire them
- validation for if the message is too long. This will be on backend too but I think I remember Alex saying to do this on front-end too
- research logging strategy

BACK END E.H.
- need to implement a global exception handler
- figure out how to validate the Boolean Column Completed

**LOG**
**6/4/24**
- going to use the basic logging that comes with spring-boot-starter-parent. I think I'll just need to describe what the functions are doing

ACHIEVED:
- refined error descriptions in my crud-logic.ts file and how they're handled in the container component
- reviewed error handling in Spring. In future, I would like to use Global Exception Handling and subsequent error classes. However, for the scope of this project - I am happy with the handling currently implemented
- Implemented Swagger functionality on the backend. Learned that Springfox is outdated and incompatible for the vesion of Springboot that I'm using. Classmate suggested using "springdoc-openapi-starter-webmvc-ui" instead and it worked great
- Implemented a logging strategy on the back-end whereby I log the different steps involved in API request/responses. I used the default logging that didn't require any new dependencies (I think it came from 'spring-boot-starter-parent')
- Researched Vitest and React Test Library

**TOMORROW**
- Implement React testing to all components used - research Vitest further
- Make the strikethrough functionality functional
- Front-end finish styling

**LOG**
**7/4/24**
- Testing API mock calls was a bit challenging and time-consuming
- act and waitFor were very important to my implementations

ACHIEVED:
- Added testing to my logic and react components - testing for ts was different to tsx. Used React Test Lib, Vitest & Jest
- Added Strikethrough functionality to the To Do Item component
- Added Strikethrough function to Controller and Service Layers of backend

**TOMORROW**
- Add in Context 
- Add Toast Notifcation component and use context to call this
- Use Context to blur out background when modal is open 
- Add in Zod error handling to RHF
- Styling finishing touches

**LOG**
**8/4/24**

ACHIEVED:
- Added in Context
- Added Toast Notifications
- Decided not to use Zod for now as the way it TSX and the Controller Component interact is complex
- some styling changes

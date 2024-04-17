// import { describe, expect, it, vi } from "vitest";
// import {
//   getAllTodoItems,
//   addTodoItem,
//   editTodoItem,
//   deleteTodoItem,
// } from "./crud-logic";

// describe("getAllToDoItems", () => {
//   it("should resolve to an array of todo items", async () => {
//     const spyFetch = vi.spyOn(global, "fetch");
//     const mockTodoItems = [
//       { id: 1, content: "Todo 1", completed: false },
//       { id: 2, content: "Todo 2", completed: true },
//     ];
//     const mockedResponse: any = {
//       ok: true,
//       json() {
//         return Promise.resolve(mockTodoItems);
//       },
//     };
//     spyFetch.mockResolvedValue(mockedResponse);

//     await expect(getAllTodoItems()).resolves.toBeInstanceOf(Array);
//     await expect(getAllTodoItems()).resolves.toEqual(mockTodoItems);
//   });
//   it("should throw an error when the response from the API is not ok", async () => {
//     const spyFetch = vi.spyOn(global, "fetch");

//     spyFetch.mockResolvedValue({
//       ok: false,
//       status: 404,
//       json: async () => ({}),
//     });

//     await expect(getAllTodoItems()).rejects.toThrow();
//   });
// });

// describe("addTodoItem function", () => {
//   it("should add a new todo item and return the created item", async () => {
//     const newItemText = "New item";

//     const spyFetch = vi.spyOn(global, "fetch");

//     spyFetch.mockResolvedValue({
//       ok: true,
//       status: 201,
//       json: async () => ({ id: 2, content: newItemText }),
//     });

//     const createdItem = await addTodoItem(newItemText);

//     expect(createdItem).toEqual({ id: 2, content: newItemText });
//     expect(spyFetch).toHaveBeenCalledWith(`http://localhost:8080/items`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         completed: false,
//         content: newItemText,
//       }),
//     });
//   });

//   it("should throw an error when the response from the API is not ok", async () => {
//     const newItemText = "New item";

//     const spyFetch = vi.spyOn(global, "fetch");

//     spyFetch.mockResolvedValue({
//       ok: false,
//       status: 500,
//       json: async () => ({}),
//     });

//     await expect(addTodoItem(newItemText)).rejects.toThrow();

//     expect(spyFetch).toHaveBeenCalledWith(`http://localhost:8080/items`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         completed: false,
//         content: newItemText,
//       }),
//     });
//   });
// });

// describe("editTodoItem function", () => {
//   it("should edit a todo item and return the updated item", async () => {
//     const id = 1;
//     const newText = "Updated text";

//     const spyFetch = vi.spyOn(global, "fetch");

//     spyFetch.mockResolvedValue({
//       ok: true,
//       status: 200,
//       json: async () => ({ id: 1, content: newText }),
//     });

//     // Call the function 'editTodoItem' and expect it to return the updated item
//     const updatedItem = await editTodoItem(id, newText);

//     // Assertions
//     expect(updatedItem).toEqual({ id: 1, content: newText });
//     expect(spyFetch).toHaveBeenCalledWith(`http://localhost:8080/items/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         content: newText,
//       }),
//     });
//   });

//   it("should throw an error when the response from the API is not ok", async () => {
//     const id = 1;
//     const newText = "Updated text";

//     const spyFetch = vi.spyOn(global, "fetch");

//     spyFetch.mockResolvedValue({
//       ok: false,
//       status: 404,
//       json: async () => ({}),
//     });

//     await expect(editTodoItem(id, newText)).rejects.toThrow();

//     expect(spyFetch).toHaveBeenCalledWith(`http://localhost:8080/items/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         content: newText,
//       }),
//     });
//   });
// });

// describe("deleteTodoItem function", () => {
//   it("should use the correct method and API call when deleting", async () => {
//     const idToDelete = 1;

//     const spyFetch = vi.spyOn(global, "fetch");

//     spyFetch.mockResolvedValue({
//       ok: true,
//       status: 204,
//     });

//     await deleteTodoItem(idToDelete);

//     expect(spyFetch).toHaveBeenCalledWith(
//       `http://localhost:8080/items/${idToDelete}`,
//       {
//         method: "DELETE",
//       }
//     );
//   });

//   it("should throw an error if the response from the API is not found", async () => {
//     const idToDelete = 1;

//     const spyFetch = vi.spyOn(global, "fetch");

//     spyFetch.mockResolvedValue({
//       ok: false,
//       status: 404,
//       json: async () => ({}),
//     });

//     await expect(deleteTodoItem(idToDelete)).rejects.toThrow();

//     expect(spyFetch).toHaveBeenCalledWith(
//       `http://localhost:8080/items/${idToDelete}`,
//       {
//         method: "DELETE",
//       }
//     );
//   });
// });

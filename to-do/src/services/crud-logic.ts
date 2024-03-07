import { TodoItemInterface } from "./interfaces.ts";

const API_URL = "http://localhost:8080/items";

export const getAllTodoItems = async (): Promise<TodoItemInterface[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      const errorMessage = `Failed to get posts. Status: ${response.status}, ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    const data: TodoItemInterface[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
    // this error ^ is the one that gets sent to the async function that calls it and catches the error
  }
};

export const addTodoItem = async (text: string): Promise<TodoItemInterface> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: false, content: text }),
    });

    if (!response.ok) {
      const errorMessage = `Failed to add item. Status: ${response.status}, ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const editTodoItem = async (
  id: number,
  text: string
): Promise<TodoItemInterface> => {
  console.log("Type of text:", typeof text);
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: text,
      }),
    });

    if (!response.ok) {
      const errorMessage = `Failed to edit item. Status: ${response.status}, ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const toggleItemCompletion = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/${id}/toggle`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorMessage = `Failed to toggle item ${id} completion. Status: ${response.status}, ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteTodoItem = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const errorMessage = `Failed to delete item. Status: ${response.status}, ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

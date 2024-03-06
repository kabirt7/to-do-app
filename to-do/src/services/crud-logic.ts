import { TodoItemInterface } from "./interfaces.ts";

const API_URL = "http://localhost:8080/iteems";

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

export const deleteTodoItem = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete post");
  }
};

// export const postBlogPost = async (title, content, category) => {
//   const url = "http://localhost:8080/posts";
//   const postData = {
//     title: title,
//     content: content,
//     category: category,
//   };

//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(postData),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to post blog post");
//   }

//   // Assuming you want to return the JSON response from the server
//   const responseData = await response.json();
//   return responseData;
// };

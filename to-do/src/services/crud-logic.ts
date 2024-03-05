import { TodoItemInterface } from "./interfaces.ts";

export const getAllTodoItems = async (): Promise<TodoItemInterface[]> => {
  const response = await fetch("http://localhost:8080/items");
  if (!response.ok) {
    throw new Error("Failed to get posts");
  }
  const data: TodoItemInterface[] = await response.json();
  return data;
};

// export const deleteBlogPost = async (id) => {
//   const response = await fetch(`http://localhost:8080/posts/${id}`, {
//     method: "DELETE",
//   });
//   if (!response.ok) {
//     throw new Error("Failed to delete post");
//   }
// };

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

import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoListContainer from "./TodoListContainer";
import {
  addTodoItem,
  deleteTodoItem,
  editTodoItem,
  getAllTodoItems,
} from "../services/crud-logic";
import { vi } from "vitest";
import { useState } from "react";

vi.mock("../services/crud-logic", () => ({
  getAllTodoItems: vi.fn(),
  addTodoItem: vi.fn(),
  editTodoItem: vi.fn(),
  deleteTodoItem: vi.fn(),
}));

const TodoListContainerWrapper = () => {
  const [state, setState] = useState("none");

  return <TodoListContainer openModal={state} setOpenModal={setState} />;
};

describe("TodoListContainer", () => {
  const mockGetAllTodoItems = getAllTodoItems as jest.MockedFunction<
    typeof getAllTodoItems
  >;
  beforeEach(() => {
    // mock the implementation of getAllTodoItems
    mockGetAllTodoItems.mockResolvedValue([
      { id: 1, content: "Task 1", completed: false },
      { id: 2, content: "Task 2", completed: false },
    ]);
  });

  test("fetches and renders all todo items on initial load", async () => {
    render(<TodoListContainerWrapper />);

    await waitFor(() => {
      expect(mockGetAllTodoItems).toHaveBeenCalledTimes(1);
    });

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });

  test("opens add modal and adds correct item", async () => {
    render(<TodoListContainerWrapper />);
    await act(async () => {
      userEvent.click(screen.getByText("ADD"));
    });

    await waitFor(() => {
      const textarea = screen.getByTestId("inputField");
      fireEvent.change(textarea, { target: { value: "New Task" } });
    });

    await act(async () => {
      await waitFor(() => {
        userEvent.click(screen.getByText("Yes"));
      });
    });

    await waitFor(() => {
      expect(addTodoItem).toHaveBeenCalledWith("New Task");
    });

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("opens edit modal and edits an existing item", async () => {
    render(<TodoListContainerWrapper />);

    // Check the checkbox
    await waitFor(() => {
      fireEvent.click(screen.getByTestId("1"));
    });

    await act(async () => {
      userEvent.click(screen.getByText("EDIT"));
    });

    await waitFor(() => {
      const textarea = screen.getByTestId("inputField");
      fireEvent.change(textarea, { target: { value: "Updated" } });
    });

    userEvent.click(screen.getByText("Yes"));

    await waitFor(() => {
      expect(editTodoItem).toHaveBeenCalledWith(1, "Updated");
    });
  });

  test("deletes a selected item", async () => {
    render(<TodoListContainerWrapper />);

    await waitFor(() => {
      fireEvent.click(screen.getByTestId("2"));
    });

    await act(async () => {
      userEvent.click(screen.getByText("DELETE"));
    });

    await waitFor(() => {
      expect(deleteTodoItem).toHaveBeenCalledWith(2);
    });
  });
});

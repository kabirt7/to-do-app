import { render, screen, fireEvent, act } from "@testing-library/react";
import TodoItem from "./TodoItem";
import { vi, expect } from "vitest";

const mockHandleCheckboxChange = vi.fn();

const todoItemProps = {
  name: "todo-name",
  content: "Sample Todo Content",
  value: 1,
  handleCheckboxChange: mockHandleCheckboxChange,
  optionId: 1,
  completed: false,
  getAllItems: (): void => {},
};

test("renders TodoItem component", () => {
  render(<TodoItem {...todoItemProps} />);
  const todoItemElement = screen.getByTestId(todoItemProps.optionId);
  expect(todoItemElement).toBeInTheDocument();
});

test("renders input with correct attributes", () => {
  render(<TodoItem {...todoItemProps} />);
  const inputElement = screen.getByTestId(todoItemProps.optionId);

  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("name", todoItemProps.name);
  expect(inputElement).toHaveAttribute("type", "radio");
  expect(inputElement).toHaveAttribute("value", String(todoItemProps.value));
});

test("renders todo content correctly", () => {
  render(<TodoItem {...todoItemProps} />);
  const todoContentElement = screen.getByText(todoItemProps.content);
  expect(todoContentElement).toBeInTheDocument();
});

test("calls handleCheckboxChange when radio input is changed", async () => {
  render(<TodoItem {...todoItemProps} />);
  const inputElement = screen.getByTestId(todoItemProps.optionId);

  await act(async () => {
    fireEvent.click(inputElement);
  });

  expect(mockHandleCheckboxChange).toHaveBeenCalledTimes(1);

  expect(mockHandleCheckboxChange).toHaveBeenCalledWith(
    expect.objectContaining({
      target: expect.objectContaining({ checked: true }),
    })
  );
});

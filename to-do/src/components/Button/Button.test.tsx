import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { vi, expect } from "vitest";

const mockClickFunction = vi.fn();

const buttonProps = {
  shape: "square",
  children: "Click Me",
  clickFunction: mockClickFunction,
};

test("renders Button component", () => {
  render(<Button {...buttonProps} />);
  const buttonElement = screen.getByText("Click Me");
  expect(buttonElement).toBeInTheDocument();
});

test("applies correct styling based on shape prop", () => {
  render(<Button {...buttonProps} />);
  const buttonElement = screen.getByText("Click Me");

  expect(buttonElement).toHaveStyle({
    padding: "10px",
    borderRadius: "5px",
  });
});

test("calls clickFunction when button is clicked", () => {
  render(<Button {...buttonProps} />);
  const buttonElement = screen.getByText("Click Me");

  fireEvent.click(buttonElement);

  expect(mockClickFunction).toHaveBeenCalledTimes(1);
});

test("passes correct argument to clickFunction when button is clicked", () => {
  render(<Button {...buttonProps} />);
  const buttonElement = screen.getByText("Click Me");

  fireEvent.click(buttonElement);

  expect(mockClickFunction).toHaveBeenCalledWith(expect.anything());
});

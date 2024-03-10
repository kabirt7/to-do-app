import { render, screen } from "@testing-library/react";
import Home from "./Home";
import "@testing-library/jest-dom";

describe("Home Component", () => {
  it("renders the Home component correctly", () => {
    render(<Home />);

    expect(screen.getByText("To-Do List")).toBeInTheDocument();
    expect(screen.getByTestId("todo-list-container")).toBeInTheDocument();
  });
});

import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import CrudModal from "./CrudModal";
import { vi } from "vitest";

test("renders CrudModal component", () => {
  render(<CrudModal submitFunction={() => {}} closeModal={() => {}} />);

  const modalElement = screen.getByTestId("crud-modal");
  expect(modalElement).toBeInTheDocument();
});

test("renders textarea with correct name attribute", () => {
  render(<CrudModal submitFunction={() => {}} closeModal={() => {}} />);

  const textareaElement = screen.getByTestId("inputField");
  expect(textareaElement).toBeInTheDocument();
  expect(textareaElement).toHaveAttribute("name", "inputField");
});

test("calls submitFunction when form is submitted", async () => {
  const mockSubmitFunction = vi.fn();

  render(
    <CrudModal submitFunction={mockSubmitFunction} closeModal={() => {}} />
  );
  await act(async () => {
    const formElement = screen.getByTestId("crud-modal");
    fireEvent.submit(formElement);
  });

  expect(mockSubmitFunction).toHaveBeenCalledTimes(1);
});

test('calls closeModal when "No" button is clicked', async () => {
  const mockCloseModal = vi.fn();

  render(<CrudModal submitFunction={() => {}} closeModal={mockCloseModal} />);

  await act(async () => {
    const noButton = screen.getByText("No");
    fireEvent.click(noButton);
  });

  await waitFor(() => {
    expect(mockCloseModal).toHaveBeenCalledTimes(1);
  });
});

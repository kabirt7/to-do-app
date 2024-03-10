import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// clean up after every test - unmount my components
afterEach(() => {
  cleanup();
});

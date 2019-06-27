import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("select input", () => {
  describe("without autofocus", () => {
    it("should be able to open", () => {
      const { getByLabelText, getByText, debug } = render(<App />);

      const input = getByLabelText("Select a fruit");
      input.focus();
      fireEvent.keyDown(input, { key: "ArrowDown" });
      expect(getByText("Papaya")).toBeInTheDocument();
    });
  });
  describe("with autofocus", () => {
    it("should be able to open", () => {
      const { getByLabelText, getByText, debug } = render(
        <App autoFocus={true} />
      );

      const input = getByLabelText("Select a fruit");
      input.focus();
      fireEvent.keyDown(input, { key: "ArrowDown" });
      expect(getByText("Papaya")).toBeInTheDocument();
    });
  });
});

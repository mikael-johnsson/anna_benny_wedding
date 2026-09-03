import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Form from "../components/Form";

describe("FormComponent", () => {
  test("heading exists", () => {
    render(<Form />);
    expect(
      screen.getAllByRole("heading", { level: 2, name: "Info till brudparet" }),
    ).toBeDefined();
  });
});

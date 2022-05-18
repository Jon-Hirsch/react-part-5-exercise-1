import React from "react";
import Shape from "../src/components/Shape";
import App from "../src/components/App";
import { fireEvent, render } from "@testing-library/react";

describe("App", function () {
  test("should contain two select element", function () {
    const { container } = render(<App />);
    expect(container.querySelectorAll("select").length).toEqual(2);
  });

  describe("The first select element", function () {
    test("should control the color of the Shape component", function () {
      const { container } = render(<App />);
      const selects = container.querySelectorAll("select");

      fireEvent.change(selects[0], { target: { value: "green" } });
      expect(container.querySelector(".green")).not.toBeNull();

      fireEvent.change(selects[0], { target: { value: "red" } });
      expect(container.querySelector(".red")).not.toBeNull();

      fireEvent.change(selects[0], { target: { value: "blue" } });
      expect(container.querySelector(".blue")).not.toBeNull();
    });
  });
  describe("The second select element", function () {
    test("should control the shape of the Shape component", function () {
      const { container } = render(<App />);
      const selects = container.querySelectorAll("select");

      fireEvent.change(selects[1], { target: { value: "circle" } });
      expect(container.querySelector(".circle")).not.toBeNull();

      fireEvent.change(selects[1], { target: { value: "square" } });
      expect(container.querySelector(".square")).not.toBeNull();

      fireEvent.change(selects[1], { target: { value: "diamond" } });
      expect(container.querySelector(".diamond")).not.toBeNull();
    });
  });
});

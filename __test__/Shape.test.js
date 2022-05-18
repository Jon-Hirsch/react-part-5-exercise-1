import React from "react";
import Shape from "../src/components/Shape";
import { render } from "@testing-library/react";

describe("Shape", function () {
  test("should contain a div", function () {
    const { container } = render(<Shape color="blue" shape="square" />);
    expect(container.querySelectorAll("div").length).toEqual(1);
  });

  test('should apply the class red to the div if the color property is "red"', function () {
    const { container } = render(<Shape color="red" shape="diamond" />);
    expect(container.querySelectorAll("div.red").length).toEqual(1);
  });

  test('should apply the class green to the div if the color property is "green"', function () {
    const { container } = render(<Shape color="green" shape="circle" />);
    expect(container.querySelectorAll("div.green").length).toEqual(1);
  });

  test('should apply the class blue to the div if the color property is "blue"', function () {
    const { container } = render(<Shape color="blue" shape="square" />);
    expect(container.querySelectorAll("div.blue").length).toEqual(1);
  });

  test("should apply the class red to the div if the color property is not set", function () {
    const { container } = render(<Shape />);
    expect(container.querySelectorAll("div.red").length).toEqual(1);
  });

  test("should apply the class red to the div if the color property is any other value", function () {
    const { container } = render(<Shape color="purple" shape="trapazoid" />);
    expect(container.querySelectorAll("div.red").length).toEqual(1);
  });

  test('should apply the class square to the div if the shape property is "square"', function () {
    const { container } = render(<Shape color="blue" shape="square" />);
    expect(container.querySelectorAll("div.square").length).toEqual(1);
  });

  test('should apply the class diamond to the div if the shape property is "diamond"', function () {
    const { container } = render(<Shape color="red" shape="diamond" />);
    expect(container.querySelectorAll("div.diamond").length).toEqual(1);
  });

  test('should apply the class circle to the div if the shape property is "circle"', function () {
    const { container } = render(<Shape color="green" shape="circle" />);
    expect(container.querySelectorAll("div.circle").length).toEqual(1);
  });

  test("should apply the class square to the div if the shape property is not set", function () {
    const { container } = render(<Shape color="blue" shape="square" />);
    expect(container.querySelectorAll("div.square").length).toEqual(1);
  });

  test("should apply the class square to the div if the shape property is any other value", function () {
    const { container } = render(<Shape color="purple" shape="trapazoid" />);
    expect(container.querySelectorAll("div.square").length).toEqual(1);
  });
});

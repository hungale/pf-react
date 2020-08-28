import React from "react";
import { render } from "@testing-library/react";
import Monogram from ".";

test("renders without crashing", () => {
  render(<Monogram />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<Monogram />);
  expect(asFragment()).toMatchSnapshot();
});

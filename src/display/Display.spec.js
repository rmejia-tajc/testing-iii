// Test away!

import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";

import Display from "./Display.js";

describe("<Display /> Component", () => {

  it("renders without crashing", () => {
    const sanityCheck = render(<Display />);
  });

  it.skip("should match snapshot", () => {
    const tree = renderer.create(<Display />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should default to (unlocked) and (open)", () => {
    const { getByTestId } = render(<Display />);

    const unlockedLocked = getByTestId(/unlockedLocked/i);
    const openClosed = getByTestId(/openClosed/i);

    expect(unlockedLocked).toBeInTheDocument();
    expect(openClosed).toBeInTheDocument();
  });

  it("when unlocked use the green-led class", () => {
    const { getByTestId } = render(<Display locked={false} />);

    const unlockedLocked = getByTestId("unlockedLocked");

    expect(unlockedLocked).toHaveClass("led green-led");
  });

  it("when open use the green-led class", () => {
    const { getByTestId } = render(<Display closed={false} />);

    const openClosed = getByTestId("openClosed");

    expect(openClosed).toHaveClass("led green-led");
  });

  it("when locked use the red-led class", () => {
    const { getByTestId } = render(<Display locked={true} />);

    const unlockedLocked = getByTestId("unlockedLocked");

    expect(unlockedLocked).toHaveClass("led red-led");
  });

  it("when closed use the red-led class", () => {
    const { getByTestId } = render(<Display closed={true} />);

    const openClosed = getByTestId("openClosed");

    expect(openClosed).toHaveClass("led red-led");
  });

});

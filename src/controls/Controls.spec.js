// Test away!

import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";

import Controls from "./Controls.js";

describe("<Controls /> Component", () => {

  it("renders without crashing", () => {
    const sanityCheck = render(<Controls />);
  });

  it.skip("should match snapshot", () => {
    const tree = renderer.create(<Controls />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should default to (lock gate) and (close gate)", () => {
    const { getByTestId } = render(<Controls />);

    const btnLockUnlock = getByTestId(/lockUnlockGate/i);
    const btnCloseOpen = getByTestId(/closeOpenGate/i);

    expect(btnLockUnlock).toBeInTheDocument();
    expect(btnCloseOpen).toBeInTheDocument();
  });

  it('the "lock gate" button should be disabled if the gate is open', () => {
    const { getByTestId } = render(<Controls closed={false} />);

    const btnLockUnlock = getByTestId(/lockUnlockGate/i);
    fireEvent.click(btnLockUnlock);

    expect(btnLockUnlock).toBeDisabled();
  });

  it('the "open gate" button should be disabled if the gate is locked', () => {
    const { getByTestId } = render(<Controls locked={true} />);

    const btnCloseOpen = getByTestId(/closeOpenGate/i);
    fireEvent.click(btnCloseOpen);

    expect(btnCloseOpen).toBeDisabled();
  });

  it("close gate button should call the passed function", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(<Controls toggleClosed={mockFn} />);

    const btnCloseOpen = getByTestId(/closeOpenGate/i);
    fireEvent.click(btnCloseOpen);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("lock gate button should call the passed function", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <Controls toggleLocked={mockFn} closed={true} />
    );

    const btnLockUnlock = getByTestId(/lockUnlockGate/i);
    fireEvent.click(btnLockUnlock);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

});

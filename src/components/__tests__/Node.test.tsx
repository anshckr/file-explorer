import React from "react";
import { cleanup, render } from "@testing-library/react";
import Node from "../Node";
import { FileTypes } from "../../types";

afterEach(() => {
  cleanup();
});

describe("Node", () => {
  test("should render file tree", () => {
    const Files = {
      type: FileTypes.FILE,
      name: "test"
    };

    const { getByText } = render(<Node entity={Files} elementIndex={0} />);

    expect(getByText("File: test")).toBeTruthy();
  });
});

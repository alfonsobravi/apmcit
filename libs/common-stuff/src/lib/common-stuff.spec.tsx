import React from "react";
import { render } from "@testing-library/react";

import CommonStuff from "./common-stuff";

describe("CommonStuff", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CommonStuff />);
    expect(baseElement).toBeTruthy();
  });
});

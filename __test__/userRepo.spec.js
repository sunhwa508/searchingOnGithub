import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { UserRepo } from "../src/pages/userRepo/UserRepo";
import { act } from "react-dom/test-utils";

/**
 * @jest-environment jsdom
 */

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("should render component, test textContent", () => {
  act(() => {
    render(<UserRepo />, container);
  });
});

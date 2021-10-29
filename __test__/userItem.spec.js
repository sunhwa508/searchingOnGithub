import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import UserItem from "../src/components/userItem/UserItem";
import { act } from "react-dom/test-utils";
import { createMemoryHistory } from "history";
import { Router } from "react-router";

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

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    location: {
      pathname: "/user/repos/1",
    },
  }),
}));

test("should render component, test textContent", () => {
  const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
  const fakeUser = {
    login: "Joni Baez",
    avatar_url: "http://dummy.com",
    type: "user",
    html_url: "http://dummy.com",
    gravatar_id: "123",
  };

  act(() => {
    render(
      <Router history={historyMock}>
        <UserItem item={fakeUser} />
      </Router>,
      container,
    );
    expect(container.querySelector("h2")).click();
    expect(historyMock.push.mock.calls[0][0]).toEqual(`/user/repos/1`);
  });
});

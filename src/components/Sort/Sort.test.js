import React from "react";
import { mount } from "enzyme";
import { DropdownButton, MenuItem } from "react-bootstrap";

import Sort from ".";

describe("deep Sort tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Sort />);
  });

  it("renders without crashing", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should render a DropdownButton", () => {
    expect(wrapper.contains(DropdownButton)).toEqual(true);
  });

  it("should have 4 MenuItems", () => {
    const menuItems = wrapper.find(MenuItem);
    expect(menuItems.length).toBe(4);
  });

  it("should have one MenuItem active", () => {
    const activeItem = wrapper.find("[active=true]");
    expect(activeItem.length).toBe(1);
  });

  it("should have MenuItem 'None' active", () => {
    const activeItem = wrapper.find("[active=true]");
    expect(activeItem.text()).toEqual("None");
  });
});

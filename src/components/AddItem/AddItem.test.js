import React from "react";
import { mount } from "enzyme";
import { FormControl, Button } from "react-bootstrap";

import AddItem from ".";

describe("deep AddItem tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<AddItem handleOnClick={() => {}} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should render two FormControl", () => {
    const formControls = wrapper.find(FormControl);
    expect(formControls.length).toBe(2);
  })

  it("should render a Button", () => {
    expect(wrapper.contains(Button)).toEqual(true);
  })
});

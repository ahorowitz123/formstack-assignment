import React from "react";
import { mount } from "enzyme";

import ItemList from ".";
import { initialState } from "../../redux/Reducer";

describe("deep ItemList tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ItemList items={initialState.items} selectedId={0} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should have 4 rows", () => {
    const rows = wrapper.find("tr");
    expect(rows.length).toBe(4);
  });

  it("should have 1 row selected", () => {
    const selected = wrapper.find(".selected");
    expect(selected.length).toBe(1);
  });

  it("should have row id 0 selected", () => {
    const selectedKey = wrapper.find(".selected").key();
    expect(selectedKey).toEqual("0");
  });
});

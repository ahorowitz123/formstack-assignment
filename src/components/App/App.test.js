import React from "react";
import { shallow } from "enzyme";
import { PageHeader } from "react-bootstrap";

import App from ".";
import AddItemContainer from "../../containers/AddItemContainer";
import SortContainer from "../../containers/SortContainer";
import ItemListContainer from "../../containers/ItemListContainer";

describe("shallow App tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders without crashing", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("renders PageHeader", () => {
    const pageHeader = (
      <PageHeader>Welcome to Adam Horowitz's Form Viewer!</PageHeader>
    );
    expect(wrapper.contains(pageHeader)).toEqual(true);
  });

  it("renders AddItemContainer", () => {
    const addItemContainer = <AddItemContainer />;
    expect(wrapper.contains(addItemContainer)).toEqual(true);
  });

  it("renders SortContainer", () => {
    const sortContainer = <SortContainer />;
    expect(wrapper.contains(sortContainer)).toEqual(true);
  });

  it("renders ItemListContainer", () => {
    const itemListContainer = <ItemListContainer />;
    expect(wrapper.contains(itemListContainer)).toEqual(true);
  });
});

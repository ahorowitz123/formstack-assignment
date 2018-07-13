import { ADD_ITEM, DELETE_ITEM, SELECT_ITEM, SORT } from "../../constants";
import { addItem, deleteItem, selectItem, sortList } from ".";

describe("action creator tests", () => {
  it("should create ADD_ITEM action", () => {
    const text = "Test Question";
    const itemType = "Multiple Choice";
    const expectedAction = {
      type: ADD_ITEM,
      id: 3,
      text,
      itemType
    };

    expect(addItem(text, itemType)).toEqual(expectedAction);
  });

  it("should create DELETE_ITEM action", () => {
    const id = 3;
    const expectedAction = {
      type: DELETE_ITEM,
      id
    };

    expect(deleteItem(id)).toEqual(expectedAction);
  });

  it("should create SELECT_ITEM action", () => {
    const id = 3;
    const expectedAction = {
      type: SELECT_ITEM,
      id
    };

    expect(selectItem(id)).toEqual(expectedAction);
  });

  it("should create SORT action", () => {
    const sortType = "Text";
    const expectedAction = {
      type: SORT,
      sortType
    };

    expect(sortList(sortType)).toEqual(expectedAction);
  });
});

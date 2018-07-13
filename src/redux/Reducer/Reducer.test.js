import reducer, { initialState } from ".";
import { ADD_ITEM, DELETE_ITEM, SELECT_ITEM, SORT } from "../../constants";
import { addItem, deleteItem, selectItem, sortList } from "../Actions";

describe("reducer tests", () => {
  const mockInitialState  = {
    items: [
      {
        id: 0,
        text: "What is your favorite food?",
        itemType: "Multiple Choice",
        createdTimestamp: 1531409579150
      },
      {
        id: 1,
        text: "What is your primary language?",
        itemType: "Dropdown",
        createdTimestamp: 1531409479150
      },
      {
        id: 2,
        text: "How do you feel about the weather today?",
        itemType: "Text Box",
        createdTimestamp: 1531409489150
      }
    ],
    selectedId: -1,
    sortType: "None"
  };

  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD_ITEM action", () => {
    const id = mockInitialState.items.length;
    const text = "Test Question";
    const itemType = "Mutliple Choice";
    const now = Date.now();
    Date.now = jest.genMockFunction().mockReturnValue(now);
    const newState = {
      ...mockInitialState,
      items: [
        ...mockInitialState.items,
        {
          id,
          text,
          itemType,
          createdTimestamp: now
        }
      ]
    };
    expect(reducer(mockInitialState, addItem(text, itemType))).toEqual(
      newState
    );
  });

  describe("should handle DELETE_ITEM action", () => {
    const id = 1;
    const newState = reducer(mockInitialState, deleteItem(id));
    const newItems = newState.items;

    it("should have one less item", () => {
      expect(newItems.length).toBe(mockInitialState.items.length - 1);
    });

    let item1 = null;
    newItems.forEach(item => {
      if (item.id === 1) {
        item1 = item;
      }
    });

    it("should not have an item with an id of 1", () => {
      expect(item1).toBeNull();
    });
  });

  it("should handle SELECT_ITEM action", () => {
    const selectedId = 1;
    const newState = {
      ...mockInitialState,
      selectedId
    };
    expect(reducer(mockInitialState, selectItem(selectedId))).toEqual(newState);
  });

  describe("should handle SORT_ITEM action", () => {
    const sortType = "Text";
    const newState = reducer(mockInitialState, sortList(sortType));

    it("should have sortType of Text", () => {
      expect(newState.sortType).toBe(sortType);
    })
  });
});

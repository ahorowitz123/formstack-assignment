// @flow

import type { Item, Action } from "../../types";

type State = { +items: Array<Item> };

const initialState: State = {
  items: [
    {
      id: 1,
      text: "Test1",
      itemType: "Multiple Choice",
      createdTimestamp: 10
    },
    {
      id: 2,
      text: "Test2",
      itemType: "Dropdown",
      createdTimestamp: 10
    },
    {
      id: 3,
      text: "Test3",
      itemType: "Text Box",
      createdTimestamp: 10
    }
  ]
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.id,
            text: action.text,
            itemType: action.itemType,
            createdTimestamp: Date.now()
          }
        ]
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      };
    default:
      return state;
  }
};

export default reducer;

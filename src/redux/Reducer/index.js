// @flow

import type { Item, Action } from "../../types";

type State = { +items: Array<Item> };

const reducer = (state: State = { items: [] }, action: Action): State => {
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

export reducer;

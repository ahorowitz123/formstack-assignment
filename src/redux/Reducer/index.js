// @flow

import type { Action, State } from "../../types";

/* Initial state of store. Made immutable by flow State type */
const initialState: State = {
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

/* Main reducer. Kept them in the same reducer since there are only 4. Otherwise,
would have put SORT in own reducer and combined */
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
    case "SELECT_ITEM":
      return {
        ...state,
        selectedId: action.id
      };
    case "SORT":
      return {
        ...state,
        sortType: action.sortType
      };
    default:
      return state;
  }
};

export default reducer;

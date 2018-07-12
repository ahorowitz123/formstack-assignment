// @flow

import type { Action, State } from "../../types";

const initialState: State = {
  items: [
    {
      id: 0,
      text: "Test1",
      itemType: "Multiple Choice",
      createdTimestamp: 10
    },
    {
      id: 1,
      text: "Test2",
      itemType: "Dropdown",
      createdTimestamp: 10
    },
    {
      id: 2,
      text: "Test3",
      itemType: "Text Box",
      createdTimestamp: 10
    }
  ],
  selectedId: -1
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
        items: state.items.filter(item => (item.id !== action.id))
      };
    case "SELECT_ITEM":
      return {
        ...state,
        selectedId: action.id
      };
    case "SORT":
      const sortType = action.sortType;
      if (sortType === "Text") {
        return {
          ...state,
          items: state.items.slice().sort(function(a, b) {
            var textA = a.text.toUpperCase();
            var textB = b.text.toUpperCase();
            if (textA < textB) {
              return -1;
            }
            if (textA > textB) {
              return 1;
            }

            return 0;
          })
        };
      } else if (sortType === "Type") {
        return {
          ...state,
          items: state.items.slice().sort(function(a, b) {
            var typeA = a.itemType.toUpperCase();
            var typeB = b.itemType.toUpperCase();
            if (typeA < typeB) {
              return -1;
            }
            if (typeA > typeB) {
              return 1;
            }

            return 0;
          })
        };
      } else if (sortType === "Timestamp") {
        return {
          ...state,
          items: state.items.slice().sort(function(a, b) {
            return a.createdTimestamp - b.createdTimestamp;
          })
        };
      } else {
        return {
          ...state,
          items: state.items.slice().sort(function(a, b) {
            return a.id - b.id;
          })
        };
      }
    default:
      return state;
  }
};

export default reducer;

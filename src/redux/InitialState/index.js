import type {  State } from "../../types";
import ITEM_TYPES from "../../constants/itemTypes";

/* Initial state of store. Made immutable by flow State type */
export const initialState: State = {
  items: [
    {
      id: 0,
      text: "What is your favorite food?",
      itemType: ITEM_TYPES.MULTIPLE_CHOICE,
      createdTimestamp: 1531409579150
    },
    {
      id: 1,
      text: "What is your primary language?",
      itemType: ITEM_TYPES.DROPDOWN,
      createdTimestamp: 1531409479150
    },
    {
      id: 2,
      text: "How do you feel about the weather today?",
      itemType: ITEM_TYPES.TEXT_BOX,
      createdTimestamp: 1531409489150
    }
  ],
  selectedId: -1,
  sortType: "None"
};

export default initialState;

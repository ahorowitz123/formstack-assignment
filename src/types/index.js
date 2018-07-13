// @flow

import ITEM_TYPES from "../constants/itemTypes";
import ACTIONS from "../constants/actions";
import SORT_TYPES from "../constants/sortTypes";

/* Item String Types */
export type ItemType = $Keys<typeof ITEM_TYPES>;
export type ItemStringField = "text" | "itemType";
export type ItemNumField = "id" | "createdTimestamp";

/* Sort String Types */
export type SortType = $Keys<typeof SORT_TYPES>;

/* Action Types */
export type AddItemAction = {|
  type: ACTIONS.ADD_ITEM,
  id: number,
  text: string,
  itemType: ItemType
|};
export type SelectItemAction = {| type: "SELECT_ITEM", id: number |};
export type DeleteItemAction = {| type: "DELETE_ITEM", id: number |};
export type SortAction = {| type: "SORT", sortType: SortType |};

export type Action =
  | AddItemAction
  | DeleteItemAction
  | SelectItemAction
  | SortAction;

/* types pertaining to state */
export type Item = {
  +id: number,
  +text: string,
  +itemType: ItemType,
  +createdTimestamp: number
};
export type State = {
  +items: Array<Item>,
  +selectedId: number,
  +sortType: SortType
};

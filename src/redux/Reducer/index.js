import ACTIONS from "../../constants/actions";
import initialState from "../InitialState";

/* Main reducer. Kept them in the same reducer since there are only 4. Otherwise,
would have put SORT in own reducer and combined */
const reducer = (state = initialState, action) => {
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
    case ACTIONS.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      };
    case ACTIONS.SELECT_ITEM:
      return {
        ...state,
        selectedId: action.id
      };
    case ACTIONS.SORT:
      return {
        ...state,
        sortType: action.sortType
      };
    default:
      return state;
  }
};

export default reducer;

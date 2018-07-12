// @flow
import { connect } from "react-redux";

import type { State } from "../../types";
import { deleteItem, selectItem } from "../../redux/Actions";
import ItemList from "../../components/ItemList";
import getSortedItems from "../../redux/Selectors";

const mapStateToProps = (state: State) => ({
  /*
  * The items array. Uses a selector implemented with Reselect
  * to get sorted items array.
  */
  items: getSortedItems(state),
  /* The selected item ID */
  selectedId: state.selectedId
});

const mapDispatchToProps = dispatch => ({
  /* Calls dispatch on SELECT_ITEM action to change the selected ID */
  handleOnClick: id => dispatch(selectItem(id)),
  /* Calls dispatch on DELETE_ITEM action to delete item with given id */
  handleOnDeleteClick: id => dispatch(deleteItem(id))
});

/*
* Container for ItemList component. Gets sorted item list and selected
* item from store. Also gets onClick functionality and onDeleteClick
* functionality by calling dispatch on appropriate actions.
*/
const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(
  ItemList
);

export default ItemListContainer;

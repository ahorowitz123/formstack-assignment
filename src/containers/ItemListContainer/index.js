// @flow
import { connect } from "react-redux";

import type { State } from "../../types";
import { deleteItem, selectItem } from "../../redux/Actions";
import ItemList from "../../components/ItemList";

const mapStateToProps = (state: State) => ({
  items: state.items,
  selectedId: state.selectedId
});

const mapDispatchToProps = dispatch => ({
  handleOnClick: id => dispatch(selectItem(id)),
  handleOnDeleteClick: id => dispatch(deleteItem(id))
});

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(
  ItemList
);

export default ItemListContainer;

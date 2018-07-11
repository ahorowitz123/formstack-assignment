// @flow
import { connect } from "react-redux";

import type { State } from "../../types";
import { deleteItem } from "../../redux/Actions";
import ItemList from '../../components/ItemList';

const mapStateToProps = (state: State): State => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  handleOnClick: id => {},
  handleOnDeleteClick: id => dispatch(deleteItem(id))
});

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemList);

export default ItemListContainer;

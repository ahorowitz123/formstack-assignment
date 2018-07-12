import { connect } from "react-redux";

import { sortList } from "../../redux/Actions";
import Sort from "../../components/Sort";

const mapDispatchToProps = dispatch => ({
  /* Calls dispatch on SORT action to change the sortType in the store */
  handleOnSelect: (sortType) => dispatch(sortList(sortType))
});

/*
* Container for Sort component. Gives functionality to DropdownButton
* in Sort.
*/
const SortContainer = connect(null, mapDispatchToProps)(Sort);

export default SortContainer;

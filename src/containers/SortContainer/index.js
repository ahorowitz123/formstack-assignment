import { connect } from "react-redux";

import { sortList } from "../../redux/Actions";
import Sort from "../../components/Sort";

const mapDispatchToProps = dispatch => ({
  handleOnSelect: (sortType) => dispatch(sortList(sortType))
});

const SortContainer = connect(null, mapDispatchToProps)(Sort);

export default SortContainer;

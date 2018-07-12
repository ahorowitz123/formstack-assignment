import { connect } from "react-redux";

import { addItem } from "../../redux/Actions";
import AddItem from "../../components/AddItem";

const mapDispatchToProps = dispatch => ({
  handleOnClick: (text, type) => dispatch(addItem(text, type))
});

const AddItemContainer = connect(null, mapDispatchToProps)(AddItem);

export default AddItemContainer;

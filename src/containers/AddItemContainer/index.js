import { connect } from "react-redux";

import { addItem } from "../../redux/Actions";
import AddItem from "../../components/AddItem";

const mapDispatchToProps = dispatch => ({
  /*
  * Dispatches the ADD_ITEM action to the redux store. This appends
  * an item to the items array.
  */
  handleOnClick: (text, type) => dispatch(addItem(text, type))
});

/* Container component for AddItem. Gives onClick functionality to
* AddItem
*/
const AddItemContainer = connect(null, mapDispatchToProps)(AddItem);

export default AddItemContainer;

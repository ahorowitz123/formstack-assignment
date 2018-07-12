import { connect } from "react-redux";

import { addItem } from "../../redux/Actions";
import AddTodo from "../../components/AddTodo";

const mapDispatchToProps = dispatch => ({
  handleOnClick: (text, type) => dispatch(addItem(text, type))
});

const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo);

export default AddTodoContainer;

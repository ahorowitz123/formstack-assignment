// @flow

import React from "react";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";

import type { ItemType } from "../../types";

type Props = {
  handleOnClick: (text: string, type: ItemType) => void
};

const AddTodo = (props: Props) =>
  <Form inline>
    <FormGroup>
      <ControlLabel>Text</ControlLabel>{" "}
      <FormControl
        inputRef={ref => {
          this.text = ref;
        }}
        type="text"
        placeholder="What is your favorite food?"
      />
    </FormGroup>{" "}
    <FormGroup>
      <ControlLabel>Type</ControlLabel>{" "}
      <FormControl
        inputRef={ref => {
          this.type = ref;
        }}
        componentClass="select"
        placeholder="Multiple Choice"
      >
        <option value="Multiple Choice">Multiple Choice</option>
        <option value="Dropdown">Dropdown</option>
        <option value="Text Box">Text Box</option>
      </FormControl>
    </FormGroup>{" "}
    <Button
      onClick={() => {props.handleOnClick(this.text.value, this.type.value); this.text.value = ""}}
    >
      Add Todo
    </Button>
  </Form>;

export default AddTodo;

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

const AddTodo = (props: Props) => {
  let text: HTMLInputElement;
  let type: HTMLSelectElement;

  const getType = (value: string): ItemType => {
    if (value === "Multiple Choice") {
      return "Multiple Choice";
    } else if (value === "Dropdown") {
      return "Dropdown";
    } else {
      return "Text Box";
    }
  }

  return (
    <Form inline>
      <FormGroup>
        <ControlLabel>Text</ControlLabel>{" "}
        <FormControl
          inputRef={ref => {
            text = ref;
          }}
          type="text"
          placeholder="Enter Question Here!"
        />
      </FormGroup>{" "}
      <FormGroup>
        <ControlLabel>Type</ControlLabel>{" "}
        <FormControl
          inputRef={ref => {
            type = ref;
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
        onClick={() => {
          props.handleOnClick(text.value, getType(type.value));
          text.value = "";
        }}
      >
        Add Todo
      </Button>
    </Form>
  );
};

export default AddTodo;

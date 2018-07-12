import React from "react";
import { Grid, Row } from "react-bootstrap";

import "./App.css";
import ItemListContainer from "../../containers/ItemListContainer";
import AddTodoContainer from "../../containers/AddTodoContainer";

const App = () =>
  <Grid>
    <Row>
      <AddTodoContainer />
    </Row>
    <Row>
      <ItemListContainer />
    </Row>
  </Grid>;

export default App;

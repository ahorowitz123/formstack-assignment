import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import './App.css';
import ItemListContainer from '../../containers/ItemListContainer';

class App extends Component {
  render() {
    return (
      <Grid>
        <ItemListContainer />
      </Grid>
    );
  }
}

export default App;

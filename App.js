import React, {Component} from 'react';
import Grid from './src/screens/Grid';
import Pages from './src/screens/Pages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Grid />;
  }
}

export default App;

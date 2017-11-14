import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import './App.css';

import Cards from './Components/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Icon
            name="pied-piper"
            size="5x"
          />
          <h1 className="App-title">Pied Piper</h1>
        </header>
        <div className="App-body">
          <Cards />
        </div>
      </div>
    );
  }
}

export default App;

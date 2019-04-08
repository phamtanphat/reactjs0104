import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Words from './components/Word'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Words/>
      </div>
    );
  }
}

export default App;

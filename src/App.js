import React, { Component } from 'react';
import './App.css';
import Word from './components/Word'
import Loop from './components/Loop';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Word wordInfo={{en : 'One' , vn : 'Mot' , isMemorized : true}}/>
        <Word wordInfo={{en : "Two", vn : "Hai" , isMemorized : false}}/>
        <Word wordInfo={{en : "Three" , vn : "Ba" , isMemorized : true}}/>   */}
        <Loop/>
      </div>
    );
  }
}

export default App;

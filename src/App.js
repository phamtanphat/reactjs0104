import React, { Component } from 'react';
import './App.css';
import List from './components/List';
// import Loop from './components/Loop';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Word wordInfo={{en : 'One' , vn : 'Mot' , isMemorized : true}}/>
        <Word wordInfo={{en : "Two", vn : "Hai" , isMemorized : false}}/>
        <Word wordInfo={{en : "Three" , vn : "Ba" , isMemorized : true}}/>   */}
        {/* <Loop/> */}
        <List/>
      </div>
    );
  }
}

export default App;

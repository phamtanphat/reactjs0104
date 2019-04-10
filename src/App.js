import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Box from './components/Box';
import Form from './components/Form';
// import Loop from './components/Loop';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Word wordInfo={{en : 'One' , vn : 'Mot' , isMemorized : true}}/>
        <Word wordInfo={{en : "Two", vn : "Hai" , isMemorized : false}}/>
        <Word wordInfo={{en : "Three" , vn : "Ba" , isMemorized : true}}/>   */}
        {/* <Loop/> */}
        {/* <List/> */}
        {/* <Box/> */}
        <Form/>
      </div>
    );
  }
}

export default App;

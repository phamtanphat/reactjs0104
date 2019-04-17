import React, { Component } from 'react';
import './App.css';
// import Box from './components/Box';
import List from './components/List';
import { createStore } from 'redux'
import {Provider} from 'react-redux';

const defaultState = {
  words : [
    {id : 'a1' , en : 'One' , vn : 'Mot' , isMemorized : true},
    {id : 'a2' , en : 'Two' , vn : 'Hai' , isMemorized : false},
    {id : 'a3' , en : 'Three' , vn : 'Ba' , isMemorized : false}
  ],
  shouldShowForm : false,
  filterMode : 'Show_All'
}

const store = createStore((state = defaultState , action) =>{
 
  return state;
})
//https://bit.ly/2Gd8oHq

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <List/>
        </Provider>
      </div>
    );
  }
}

export default App;

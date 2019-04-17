import React, { Component } from 'react';
import './App.css';
import Box from './components/Box';
import { createStore } from 'redux'
import {Provider} from 'react-redux';


const store = createStore((state = {value : 0} , action) =>{
  if(action.type === 'INCREASE'){
    return {count : action.count ,value : state.value + 1}
  }
  return state;
})



class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Box/>
        </Provider>
      </div>
    );
  }
}

export default App;

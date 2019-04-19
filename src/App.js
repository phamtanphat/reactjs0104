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
  if(action.type === "REMOVE_WORD"){
    const newWords = state.words.filter(w => w.id !== action.id);
    return {...state,words : newWords}
  }
  if(action.type === 'TOGGLE_WORD'){
    const newWords = state.words.map(w =>{
        if(w.id !== action.id) return w;
        return {...w, isMemorized : !w.isMemorized}
    });
    return {...state , words :newWords}
  }
  if(action.type === 'SET_FILTER_MODE') return {...state , filterMode : action.filterMode}
  if(action.type === 'ADD_WORD'){
     const newWords = state.words.concat(action.word);
     return {...state,words : newWords , shouldShowForm : false}
  }
  if(action.type === 'TOGGLE_FORM') return {...state , shouldShowForm : !state.shouldShowForm}
  
  return state;
})

//https://bit.ly/2Gd8oHq

// 1 : Định nghĩa ra store =>
// state :  giá trị state đưa vào store chính dữ liệu sẽ truyền qua components
// action : 
    // + tín hiệu : type (Nhìn vào tín hiệu để thay đổi store)
    // + tham số truyền vào (action.tenthuoctinh) : giá trị này sẽ được nằm trong action
// mặc đinh phải return về state

//2 : Truyền store vào trong components (sử dụng Provider)
// 3 : Kết nối với components thông connect
// 4 : Thay đổi store thông qua dispatch
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

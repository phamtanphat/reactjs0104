import { createStore } from 'redux'
const defaultState = {
    words : [
      {id : 'a1' , en : 'One' , vn : 'Mot' , isMemorized : true},
      {id : 'a2' , en : 'Two' , vn : 'Hai' , isMemorized : false},
      {id : 'a3' , en : 'Three' , vn : 'Ba' , isMemorized : false}
    ],
    shouldShowForm : false,
    filterMode : 'Show_All'
  }

function reducer (state = defaultState , action){
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
       let newWords = state.words.concat(action.word);
       return {...state,words : newWords , shouldShowForm : false}
    }
    if(action.type === 'TOGGLE_FORM') return {...state , shouldShowForm : !state.shouldShowForm}
    
    return state;
  }
const store = createStore(reducer);

export default store;
import { createStore , combineReducers} from 'redux'
import {wordsReducer} from './reducer/wordReducer'

const reducer = combineReducers({
    words : wordsReducer,
    shouldShowForm : shouldShowFormReducer,
    filterMode : filterModeReducer
})

function shouldShowFormReducer(state = false , action){
    if(action.type === 'ADD_WORD') return false;
    if(action.type === 'TOGGLE_FORM') return !state
    return state;
}
function filterModeReducer(state = 'Show_ALL' , action){
    if(action.type === 'SET_FILTER_MODE') return action.filterMode
    return state;
}
const store = createStore(reducer);

export default store;
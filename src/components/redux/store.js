import { createStore , combineReducers , applyMiddleware} from 'redux'
import {wordsReducer} from './reducer/wordReducer'
import {shouldShowFormReducer} from './reducer/shouldshowformRedcer'
import {filterModeReducer} from './reducer/filtermodeReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    words : wordsReducer,
    shouldShowForm : shouldShowFormReducer,
    filterMode : filterModeReducer
})

//https://github.com/reduxjs/redux-thunk

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
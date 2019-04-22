import { createStore , combineReducers} from 'redux'
import {wordsReducer} from './reducer/wordReducer'
import {shouldShowFormReducer} from './reducer/shouldshowformRedcer'
import {filterModeReducer} from './reducer/filtermodeReducer';
const reducer = combineReducers({
    words : wordsReducer,
    shouldShowForm : shouldShowFormReducer,
    filterMode : filterModeReducer
})



const store = createStore(reducer);

export default store;
// phương thức sẽ tự gọi dispatch cho giá trị trả về
import axios from 'axios';

export function removeWord(_id){
    return {type : 'REMOVE_WORD' , _id }
}
export function toggleWord(Id){
    return {type : 'TOGGLE_WORD' , _id : Id }
}
export function addWord(word){
    return {type : 'ADD_WORD' , word }
}
export function toggleForm(){
    return {type : 'TOGGLE_FORM'}
}
export function set_filter_mode(filterMode){
    return {type : 'SET_FILTER_MODE' , filterMode}
}

export function getAllWord(){
    return function(dispatch){
        const URL = "http://localhost:4000/words";
        axios.get(URL)
        .then(response => dispatch({type : 'SET_ALL_WORDS' , words : response.data.words}));
    }
}
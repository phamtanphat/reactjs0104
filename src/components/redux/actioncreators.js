// phương thức sẽ tự gọi dispatch cho giá trị trả về
import axios from 'axios';

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

export function removeWord(_id){
    return function(dispatch){
        const URL = "http://localhost:4000/word/";
        axios.delete(URL + _id)
        .then(response => {
            if(!response.data.word) throw new Error("Can not remove word");
            dispatch({type : 'REMOVE_WORD' , _id : response.data.word._id})
        })
        .catch(error => alert(error.message));
    }
}

export function toggleWord(_id , isMemorized){
    return function (dispatch){
        const URL = "http://localhost:4000/word/";
        axios.put(URL + _id ,{isMemorized})
        .then(response => {
            if(!response.data.word) throw new Error("Can not toggle word");
            dispatch({type : 'TOGGLE_WORD' , _id : response.data.word._id })
        })
        .catch(error => alert(error.message));
    }
}

// 
export function addWord(en , vn){
    return function(dispatch){
        const URL = "http://localhost:4000/word"
        axios.post(URL , {en,vn})
        .then(response => {
            if(!response.data.word) throw new Error("Can not add word");
            dispatch({type : 'ADD_WORD' , word : response.data.word })
        })
        .catch(error => alert(error.message));
    }
}
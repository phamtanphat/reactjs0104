
export function wordsReducer(state = [] , action){
    if(action.type === "SET_ALL_WORDS") return action.words;
    if(action.type === "REMOVE_WORD"){
        const newWords = state.filter(w => w._id !== action._id);
        return newWords;
    }
    if(action.type === 'TOGGLE_WORD'){
        const newWords = state.map(w =>{
            if(w._id !== action._id) return w;
            return {...w, isMemorized : !w.isMemorized}
        });
        return newWords;
    }
    if(action.type === 'ADD_WORD'){
        let newWords = Object.assign([] , state);
        newWords.unshift(action.word);
        return newWords;
    }
    return state;
}

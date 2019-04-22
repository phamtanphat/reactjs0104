const defaultWords = [
    {id : 'a1' , en : 'One' , vn : 'Mot' , isMemorized : true},
    {id : 'a2' , en : 'Two' , vn : 'Hai' , isMemorized : false},
    {id : 'a3' , en : 'Three' , vn : 'Ba' , isMemorized : false}
]
export function wordsReducer(state = defaultWords , action){
    if(action.type === "REMOVE_WORD"){
        const newWords = state.filter(w => w.id !== action.id);
        return newWords;
    }
    if(action.type === 'TOGGLE_WORD'){
        const newWords = state.map(w =>{
            if(w.id !== action.id) return w;
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

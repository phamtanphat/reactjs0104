// phương thức sẽ tự gọi dispatch cho giá trị trả về
export function removeWord(id){
    return {type : 'REMOVE_WORD' , id }
}
export function toggleWord(Id){
    return {type : 'TOGGLE_WORD' , id : Id }
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
// phương thức sẽ tự gọi dispatch cho giá trị trả về
export function removeWord(id){
    return {type : 'REMOVE_WORD' , id }
}
export function toggleWord(Id){
    return {type : 'TOGGLE_WORD' , id : Id }
}
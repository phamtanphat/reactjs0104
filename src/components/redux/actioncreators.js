// phương thức sẽ tự gọi dispatch cho giá trị trả về
export function removeWord(id){
    return {type : 'REMOVE_WORD' , id }
}
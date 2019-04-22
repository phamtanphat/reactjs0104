export function shouldShowFormReducer(state = false , action){
    if(action.type === 'ADD_WORD') return false;
    if(action.type === 'TOGGLE_FORM') return !state
    return state;
}
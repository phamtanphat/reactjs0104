export function filterModeReducer(state = 'Show_ALL' , action){
    if(action.type === 'SET_FILTER_MODE') return action.filterMode
    return state;
}
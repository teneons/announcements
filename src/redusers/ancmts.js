const initState = []

export default function ancmts(state = initState, action) {

  switch(action.type) {
    case 'ADD_NEW_ANCMT': return [...state, action.payload];
    case 'OPEN_ANCMT': return state;
    case 'REMOVE_ANCMT': return state.slice(0, state.findIndex((item)=>item.id === action.payload)).concat(state.slice(id+1));
    case 'SEARCH_ANCMT': return state;
    default: return state
  }

}
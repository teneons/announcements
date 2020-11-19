const initState = [];

export default function ancmts(state = initState, action) {

  switch(action.type) {
    case 'ADD_NEW_ANCMT': return [...state, action.payload];
    case 'OPEN_ANCMT': return state;
    default: return state
  }

}
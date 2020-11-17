const initState = [];

export default function ancmts(state = initState, action) {

  if(action.type === 'ADD_NEW_ANCMT') {
    console.log(state);
    return [...state, action.payload]
  }

  return state
}
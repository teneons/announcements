const initState = [];

export default function ancmts(state = initState, action) {

  if(action.type === 'ADD_NEW_ANCMT') {
    return [...state, action.payload]
  }

  return state
}
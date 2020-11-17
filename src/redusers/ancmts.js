const initState = [];

export default function ancmts(state = initState, action) {

  if(action.type === 'ADD_NEW_ANCMT') {
    return [...state, action.payload]
  } else if(action.type === 'OPEN_ANCMT') {
    const obj = state.filter(el => el.id === action.payload)
    return obj
  }

  return state
}
const initState = [];

export default function ancmts(state = initState, action) {

  if(action.type === 'ADD_NEW_ANCMT') {
    return [...state, action.payload]
  } else if(action.type === 'OPEN_ANCMT') {
    console.log(action.payload)
    const obj = state.filter(el => el.id === action.payload)
    console.log(obj)
    return state
  }

  return state
}
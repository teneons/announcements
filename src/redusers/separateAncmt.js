const initState = '';

export default function separeteAncmt (state = initState, action) {
  if(action.type === 'OPEN_ANCMT') {
    const obj = state.filter(el => el.id === action.payload)
    return obj
  }
  return state
}
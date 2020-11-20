const initState = [{id: 'asdad', title: '42', date: '10.10.2000', description: 'adadaadad', contact: '096 123 45 67'}]

export default function ancmts(state = initState, action) {

  switch(action.type) {
    case 'ADD_NEW_ANCMT': return [...state, action.payload];
    case 'OPEN_ANCMT': return state;
    case 'REMOVE_ANCMT': return state.slice(0, state.findIndex((item)=>item.id === action.payload)).concat(state.slice(state.findIndex((item)=>item.id === action.payload)+1));
    case 'SEARCH_ANCMT': return state.filter(item => item.title.includes(action.payload));
    case 'EDIT_ANCMT': return {...state, items: state.items.map((item) => {if(item.id === action.payload.id){return[...item, action.payload]}return item})};
    default: return state
  }

}
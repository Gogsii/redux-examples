const initialState = {
  value: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {...state, value: state.value + action.payload};
    case 'INCREMENT_BY_TWO':
      return {...state, value: state.value + action.payload};
    case 'DECREMENT':
      return {...state, value: state.value - action.payload};
    case 'DECREMENT_BY_TWO':
      return {...state, value: state.value - action.payload};
    default:
      return state;
  }
}
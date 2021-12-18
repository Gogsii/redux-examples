export default (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'INCREMENT_BY_TWO':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
    case 'DECREMENT_BY_TWO':
      return state - action.payload;
    default:
      return state;
  }
}
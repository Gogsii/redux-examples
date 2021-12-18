import * as types from '../constants/ActionTypes';

export const increment = (number) => ({
  type: types.INCREMENT,
  payload: number,
});

export const incrementByTwo = (number) => ({
  type: types.INCREMENT_BY_TWO,
  payload: number,
});

export const decrement = (number) => ({
  type: types.DECREMENT,
  payload: number,
});

export const decrementByTwo = (number) => ({
  type: types.DECREMENT_BY_TWO,
  payload: number,
});
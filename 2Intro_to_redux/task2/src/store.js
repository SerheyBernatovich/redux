import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const RESET = 'COUNTER/RESET';

export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});
export const reset = () => ({
  type: RESET,
});

const initialState = {
  history: [],
};

const counterReducer = (state = initialState, action) => {
  const { history } = state;

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        history: [...history, '+1'],
      };
    case DECREMENT:
      return {
        ...state,
        history: history.concat(-1),
      };
    case RESET:
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;

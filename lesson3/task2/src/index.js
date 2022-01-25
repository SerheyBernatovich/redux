import { createStore } from 'redux';
import { counterReducer, increment, decrement } from './counter';

export const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.dispatch(increment());
console.log(store.getState());
store.dispatch(decrement());
store.dispatch(decrement());
console.log(store.getState());
store.dispatch(decrement());
console.log(store.getState());

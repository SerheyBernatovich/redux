import { createStore } from 'redux';
import { counterReducer } from './users.reducer';

const store = createStore(counterReducer);

export default store;

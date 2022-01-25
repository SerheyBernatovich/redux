import { createStore, combineReducers } from 'redux';
import usersReducer from './users.reducer';
import { counterReducer } from './counter.reducer';

const appReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});
const store = createStore(appReducer);

export default store;

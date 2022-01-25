import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';
import usersReducer from './users.reducer';
const appRedusers = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});
const store = createStore(appRedusers);
export default store;

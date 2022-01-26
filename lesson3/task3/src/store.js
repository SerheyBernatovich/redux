import { createStore, combineReducers } from 'redux';
import { languageReducer } from './language.reducer';
import userReducer from './user.reducer';
import productsReducer from './cart.reducer';
const appRedusers = combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: productsReducer,
});
const store = createStore(
  appRedusers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

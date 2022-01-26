import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';
import store from './store';
import { removeUser, setUser } from './user.actions';

store.dispatch(addProduct({ id: 74, name: 'milk' }));
console.log(store.getState());
store.dispatch(addProduct({ id: 71, name: 'sugar' }));
console.log(store.getState());
store.dispatch(removeProduct(74));
console.log(store.getState());
store.dispatch(setUser({ name: 'BOB' }));
console.log(store.getState());

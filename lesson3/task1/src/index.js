import store from './store';
import { increment, decrement, reset } from './counter';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
console.log(store.getState());
store.dispatch(addUser({ id: 74, name: 'Sarah' }));
console.log(store.getState());
store.dispatch(deleteUser(76));
console.log(store.getState());
store.dispatch(updateUser(74, { name: 'Huy' }));
console.log(store.getState());

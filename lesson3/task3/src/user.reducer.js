import { SET_USER, REMOVE_USER } from './user.actions';

const intialState = null;

const usersReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload.userData;
    case REMOVE_USER:
      return null;

    default:
      return state;
  }
};
export default usersReducer;

import { ADDUSER, DELETEUSER } from './users.actions';

const initialState = { userList: [] };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        userList: state.userList.concat(action.user),
      };
    case DELETEUSER:
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};

import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../feature/user/userSlice';
import todoSlise from '../feature/todo/todoSlise';
import postSlice from '../feature/api/postSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlise,
    post: postSlice,
  },
});

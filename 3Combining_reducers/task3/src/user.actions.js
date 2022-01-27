export const SET_USER = 'USER/SET';
export const REMOVE_USER = 'USER/REMOVE';

export const setUser = (userData) => {
  return {
    type: SET_USER,
    payload: { userData },
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

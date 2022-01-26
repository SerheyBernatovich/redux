import { SET_LANG } from './language.actions';

const intialState = 'en';

export const languageReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_LANG:
      return action.payload.lang;

    default:
      return state;
  }
};

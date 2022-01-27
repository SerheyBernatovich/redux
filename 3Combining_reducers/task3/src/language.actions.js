export const SET_LANG = 'LANGUAGE/SET';

export const setLanguage = (lang) => {
  return {
    type: SET_LANG,
    payload: { lang },
  };
};

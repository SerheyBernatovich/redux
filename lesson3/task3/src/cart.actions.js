export const ADD_PRODUCT = 'PRODUCT/ADD';
export const DELETE_PRODUCT = 'PRODUCT/DELETE';

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: { product },
  };
};

export const removeProduct = (prodId) => {
  return {
    type: DELETE_PRODUCT,
    payload: { prodId },
  };
};

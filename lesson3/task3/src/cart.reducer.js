import { ADD_PRODUCT, DELETE_PRODUCT } from './cart.actions';

const intialState = { products: [] };

const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,

        products: state.products.concat(action.payload.product),
      };
    case DELETE_PRODUCT: {
      const newList = state.products.filter(
        (user) => user.id !== action.payload.prodId
      );
      return {
        ...state,

        products: newList,
      };
    }

    default:
      return state;
  }
};
export default productsReducer;

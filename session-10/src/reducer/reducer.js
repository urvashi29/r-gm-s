import { SET_PRODUCTS, TOGGLE_WISHLIST } from "../actions/actionType";

const initState = {
  productList: [],
  wishlist: [],
  cart: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, productList: action.payload };
    case TOGGLE_WISHLIST:
      return {
        ...state,
        productList: state.productList.map((product) =>
          product.id === action.payload
            ? { ...product, liked: !product.liked }
            : product,
        ),
      };
    default:
      return state;
  }
};

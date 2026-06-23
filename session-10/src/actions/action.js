import { fetchProductsApi } from "../services/productApi";
import { SET_PRODUCTS, TOGGLE_WISHLIST } from "./actionType";

// action creator (make async)
export const fetchProducts = () => {
  return async (dispatch) => {
    //async code

    try {
      const data = await fetchProductsApi();
      const updatedData = data.map((p) => ({
        ...p,
        liked: false,
      }));

      dispatch({ type: SET_PRODUCTS, payload: updatedData });
    } catch (err) {
      console.log(err);
    }
  };
};

// action creator
export const toggleWishlist = (id) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: TOGGLE_WISHLIST, payload: id });
    }, 1000);
  };
};

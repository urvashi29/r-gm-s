import React, { useEffect, useState } from "react";
import { fetchProducts, toggleWishlist } from "../actions/action";
import { useSelector, useDispatch } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.productList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productDisplay =
    products.length &&
    products.map((p) => (
      <div key={p.id} style={{ marginBottom: "10px" }}>
        <img src={p.thumbnail} />
        <span>
          {p.title} {p.price}
        </span>

        <button onClick={() => dispatch(toggleWishlist(p.id))}>
          {p.liked ? "❤️" : "🤍"}
        </button>
      </div>
    ));

  return <>{productDisplay}</>;
};

export default ProductList;

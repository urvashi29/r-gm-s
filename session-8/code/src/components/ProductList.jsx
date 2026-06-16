import React, { useContext } from "react";
import products from "../data/products";
import { useStore } from "../context/StoreContent";

const ProductList = () => {
  const { addToCart } = useStore();

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - {p.price}
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

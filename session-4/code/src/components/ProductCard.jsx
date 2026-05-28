import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log(product);
  
  return (
    <>
      <p key={product.id}>
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </p>
    </>
  );
};

export default ProductCard;

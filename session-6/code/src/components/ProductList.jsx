import React, { memo } from "react";

const ProductCard = memo(({ product, onAdd }) => {
  console.log(`${product.price} - each product`);

  return (
    <div style={{ marginBlock: "10px" }}>
      <span>
        {product.title} - {product.price}
      </span>
      <button onClick={() => onAdd(product)}>Add To Cart</button>
    </div>
  );
});

const ProductList = ({ products, addToCart }) => {
  console.log("product list");

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;

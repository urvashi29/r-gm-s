import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response);
      setProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const productList = products.length ? (
    products.map((product) => <ProductCard product={product} />)
  ) : (
    <p>Loading...</p>
  );

  return <>{productList}</>;
};

export default Products;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${pid}`);
      console.log(response.data);
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>{product && <ProductCard product={product} />}</div>;
};

export default ProductDetail;

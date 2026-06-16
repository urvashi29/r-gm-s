import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext();

const ProductProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);

  const toggleTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <StoreContext.Provider
      value={{ theme, cart, addToCart, toggleTheme, removeCart }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default ProductProvider;

export const useStore = () => useContext(StoreContext);

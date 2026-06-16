import React from "react";
import { useStore } from "../context/StoreContent";

const Navbar = () => {
  const { cart, toggleTheme } = useStore();

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <h3>Cart: {cart.length} </h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Navbar;

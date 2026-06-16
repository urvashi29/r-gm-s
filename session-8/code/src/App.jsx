import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { useStore } from "./context/StoreContent";
import Cart from "./components/Cart";

const App = () => {
  const { theme } = useStore();

  return (
    <div
      style={{
        background: theme == "light" ? "white" : "black",
        color: theme == "light" ? "black" : "white",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        gap: "50px",
      }}
    >
      <div>
        <Navbar />
        <ProductList />
      </div>

      <Cart />
    </div>
  );
};

export default App;

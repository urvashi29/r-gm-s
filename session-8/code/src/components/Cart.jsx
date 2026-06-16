import React from "react";
import { useStore } from "../context/StoreContent";

const Cart = () => {
  const { cart, removeCart } = useStore();

  return (
    <div>
      {cart.map((p) => (
        <div key={p.id}>
          {p.name} - {p.price}
          <button onClick={() => removeCart(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

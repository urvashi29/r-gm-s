import React, { memo, useState } from "react";

const Cart = memo(({ cart }) => {
  console.log("cart data added!");

  const total = () => {
    console.log("total calculated!");

    return cart.reduce((sum, item) => {
      console.log("total calculating...");
      return sum + item.price;
    }, 0);
  };

  return (
    <>
      <div style={{ flex: 1, borderLeft: "1px solid black", padding: "10px" }}>
        <p>Total: {total()}</p>
        {cart.map((c) => (
          <div key={c.id}>{c.title}</div>
        ))}
      </div>
    </>
  );
});

export default Cart;

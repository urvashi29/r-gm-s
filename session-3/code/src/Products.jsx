import React, { useEffect, useState } from "react";

const Products = () => {
  const [count, setCount] = useState(0);

  //  It will be called on initial render (only once)
  useEffect(() => {
    // api call
    console.log("initial render");
  }, []); // callback, dependency array

  //   updation
  useEffect(() => {
    console.log("count is updated!");
  }, [count]);

  //   call on every render
  useEffect(() => {
    console.log("every render!");
  }); //no dependency array

  //   unmount
  useEffect(() => {
    let id = setTimeout(() => {
      console.log("timer");
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  const handleUpdate = () => {
    // setCount(count + 1);

    // another way to update (with a callback)
    setCount((prev) => prev + 1);

    random(count);
  };

  const random = (c) => {
    console.log(c);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={handleUpdate}>Inc</button>
    </>
  );
};

export default Products;

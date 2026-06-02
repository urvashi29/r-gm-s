import React, { useState, useEffect } from "react";

//  Multiple api call -> random order
const Dashboard = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const [user, post] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/").then((res) =>
          res.json(),
        ),
        fetch("https://jsonplaceholder.typicode.com/posts/").then((res) =>
          res.json(),
        ),
      ]);

      console.log(user, post);

      setData({ user, post });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
};

export default Dashboard;

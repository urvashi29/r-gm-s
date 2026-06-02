import React, { useState, useEffect } from "react";

// Multiple api call -> sequiential or dependent api call
const Contact = () => {
  const [user, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    try {
      const user = await fetch(
        "https://jsonplaceholder.typicode.com/users/",
      ).then((res) => res.json());

      const post = await fetch(
        "https://jsonplaceholder.typicode.com/posts/",
      ).then((res) => res.json());

      //   const comments = await fetch(
      //     "https://jsonplaceholder.typicode.com/comments/",
      //   ).then((res) => res.json());

      setUsers(user);
      setPosts(post);
      //   setComments(comments);
      console.log(user, post);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
};

export default Contact;

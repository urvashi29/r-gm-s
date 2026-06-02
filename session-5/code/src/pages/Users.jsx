import React from "react";
import { useUsers } from "../hooks/useUsers";

const Users = () => {
  const { apiData, loading } = useUsers();
  console.log(apiData);

  if (loading) return <p>Loading...</p>;

  return (
    <div>{apiData.length && apiData.map((user) => <p>{user.name}</p>)}</div>
  );
};

export default Users;

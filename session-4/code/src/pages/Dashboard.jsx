import React from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/products");
  }, 2000);

  return (
    <>
      <Card>Dashboard</Card>
    </>
  );
};

export default Dashboard;

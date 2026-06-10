import React from "react";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Notes from "./components/Notes";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/notes"
          element={
            <ProtectedRoutes>
              <Notes />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default App;

// CSR

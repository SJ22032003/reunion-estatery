import React from "react";
import { Routes, Route } from "react-router-dom";

function MyRoutes() {
  return (
    <Routes>
        <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  );
}

export default MyRoutes;
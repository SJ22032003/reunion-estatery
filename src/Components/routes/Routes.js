import React from "react";
import { Routes, Route } from "react-router-dom";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/Rent" element={<h1>Home</h1>} />
      <Route path="/*" element={<h1>Nothing to see here</h1>} />
    </Routes>
  );
}

export default MyRoutes;

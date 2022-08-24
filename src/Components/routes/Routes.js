import React from "react";
import { Routes, Route } from "react-router-dom";
import Rent from "../pages/Rent";

function MyRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Rent />} />
      <Route path='/Rent' element={<Rent />} />
      <Route path="/*" element={<h1>Nothing to see here</h1>} />
    </Routes>
  );
}

export default MyRoutes;

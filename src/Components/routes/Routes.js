import React from "react";
import { Routes, Route } from "react-router-dom";
import Rent from "../pages/Rent";
import ErrorPage from "../Common/ErrorPage";

function MyRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Rent />} />
      <Route path='/Rent' element={<Rent />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default MyRoutes;

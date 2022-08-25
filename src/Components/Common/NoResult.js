import React from "react";
import noResult from "../assets/noResult.png";

function NoResult() {
  return (
    <div>
      <center>
        <img src={noResult} alt="no result :(" />
      </center>
      <h1>No Result Found</h1>
    </div>
  );
}

export default NoResult;

import React from "react";
import MyRoutes from "./Components/routes/Routes";
import Navbar from "./Components/Common/Navbar/Navbar";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <MyRoutes />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

import React from "react";
import MyRoutes from "./Components/routes/Routes";
import useCheckSize from "./Components/Hooks/useCheckSize";
import Navbar from "./Components/Common/Navbar/index";

function App() {
  const size = useCheckSize();
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main style={{margin: size < 786 ? 'auto 2rem':'auto 8rem'}}>
        <MyRoutes />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

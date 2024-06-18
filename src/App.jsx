import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Fetch from "./pages/fetch";
import Menu from "./pages/Menu";
import Pokemon from "./pages/Pokemon";


function App() {
  return (
    <div>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Fetch />} />
          <Route path="/pokemon" element={<Pokemon />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

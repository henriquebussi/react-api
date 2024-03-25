import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Fetch from "./pages/fetch";
import Menu from "./pages/Menu";

function App() {
  return (
    <div>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Fetch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pour l'importation de la page ne pas mettre de {}
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      {/* code a bien mettre entre les div */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

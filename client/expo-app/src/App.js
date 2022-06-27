import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Category from "./pages/Category";
import NotFound from "./pages/404";
import Home from "./pages/Home";
import Register from "./pages/FormRegis";

import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/NavBar.js";
import { Home } from "./Components/Home.js";
import { Media } from "./Components/Media.js";



ReactDOM.render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/media" element={<Media />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

reportWebVitals();


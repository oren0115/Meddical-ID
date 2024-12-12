import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import css from "";
import HomePage from "../src/pages/Home"; // Assuming you have HomePage component
// import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Define the root route */}
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

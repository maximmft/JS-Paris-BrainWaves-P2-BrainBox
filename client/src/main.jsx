import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Themes from "./pages/ThemesPage/Themes.jsx";

// Define components imports similary

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="themes" element={<Themes />} />
          {/* Define other routes here if it needs */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

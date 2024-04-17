import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";


const App = () => {
  return (
    <div>
      {/* Free to add headers, footers or other components here */}
      <Outlet /> // This renders the matched child route component
    </div>
  );
};

export default App;

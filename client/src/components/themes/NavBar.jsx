import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo/brainbox.png";

function NavBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // This function will filter the themes
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home page when the logo is clicked
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleLogoClick}>
        {logo}
        <img src="Brainbox.png" alt="logo" />
      </div>
      <h1 className="navbar-title">Hello Brain boxer!</h1>
      <form onSubmit={handleSearchSubmit} className="navbar-search">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by Quiz themes"
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

export default NavBar;

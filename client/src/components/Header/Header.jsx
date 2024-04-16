import "./header.css";
import Home from "../../assets/icons/home white.png";

function Header() {
  return (
    <header className="header">
      <h1>Geography</h1>
      <div className="btn">
        <img className="home-btn" src={Home} alt="" />
      </div>
    </header>
  );
}

export default Header;

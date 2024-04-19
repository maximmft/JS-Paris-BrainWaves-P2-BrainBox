import {useNavigate} from 'react-router-dom'
import Home from "../../assets/icons/home white.png";
import "./header.css";

function Header() {
  const navigate = useNavigate()
  return (
    <header className="header">
      <h1>Geography</h1>
      <div className="btn">
        <img className="home-btn" src={Home} alt="" onClick={() => navigate(`/themespage`)} onKeyDown={() => navigate(`/themespage`)} role='presentation' />
      </div>
    </header>
  );
}

export default Header;

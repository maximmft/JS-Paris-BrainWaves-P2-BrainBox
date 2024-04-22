import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import background from "../../assets/background/background.png";
import logo from "../../assets/logo/brainbox.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="home-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src={logo} className="logo" alt="Brain Box Logo" />
      <p className="font-style">Enter the world of Brain Box</p>
      <button type="button" className="start-button" onClick={() => navigate("/themespage")}>Let's Go !</button>
    </div>
  
  );
}

export default HomePage;

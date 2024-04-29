import { useNavigate } from "react-router-dom";
import { useUsername } from "../../contexts/UsernameContext";
import "./avatar.css";
import Background from "../../assets/background/background.png";
import ImageAvatar from "./imageAvatar";

function Avatar (){

    const navigate = useNavigate();
    const {username, setUsername} = useUsername()
    const handleUsername = (e) => setUsername(e.target.value);

    return (
        <div className="avatar-section" style={{ backgroundImage: `url(${Background})` }}>
            <h1 className="avatar-title">Your username is {username}</h1>
            <input name="avatar-input" id="avatar-input" type="text" onChange={handleUsername} value={username}/>
            <h1 className="avatar-title">Choose your avatar </h1>
            <ImageAvatar/>
            <button type="button" className="username-button" onClick={() => navigate("/themespage")}>Check our themes !</button>
        </div>
    )
}

export default Avatar;
import { useUsername } from "../../contexts/UsernameContext";
import "./avatar.css";
import Bear from "../../assets/avatar/bear.png";
import Deer from "../../assets/avatar/deer.png";
import Elephant from "../../assets/avatar/elephant.png";
import Girafe from "../../assets/avatar/girafe.png";
import Hippo from "../../assets/avatar/hippo.png";
import Koala from "../../assets/avatar/koala.png";
import Panda from "../../assets/avatar/panda.png";
import Pig from "../../assets/avatar/pig.png";
import Tiger from "../../assets/avatar/tiger.png";

const avatarImages = [
    { src: Bear, alt: "Bear" },
    { src: Deer, alt: "Deer" },
    { src: Elephant, alt: "Elephant" },
    { src: Girafe, alt: "Girafe" },
    { src: Hippo, alt: "Hippo" },
    { src: Koala, alt: "Koala" },
    { src: Panda, alt: "Panda" },
    { src: Pig, alt: "Pig" },
    { src: Tiger, alt: "Tiger" }
];

function ImageAvatar() {
    const { userAvatar, setUserAvatar } = useUsername();

    const selectAvatar = (avatar) => {
        setUserAvatar(avatar);
    };

    return (
        <div className="image-avatar-display">
            {avatarImages.map((avatar) => (
                <img
                    key={avatar.src}
                    className={`images-avatar ${userAvatar === avatar.src ? "selected" : ""}`}
                    src={avatar.src}
                    alt={avatar.alt}
                    onClick={() => selectAvatar(avatar.src)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            selectAvatar(avatar.src);
                        }
                    }}
                    role="presentation" 
                />
            ))}
        </div>
    );
}

export default ImageAvatar;

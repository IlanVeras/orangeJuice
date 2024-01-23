import "./AvatarIcon.css"
import avatar from "../../images/ImageFull.png"

function AvatarIcon() {
    return (
        <div className="avatar-image">
            <img src={avatar} />
        </div>
    );
}

export default AvatarIcon;
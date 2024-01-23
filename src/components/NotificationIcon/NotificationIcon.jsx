import notification from "../../images/NotificationsFilled.svg"
import "./NotificationIcon.css"

function NotificationIcon() {
    return (
        <div className="notification-button">
            <button><img src={notification} /></button>
        </div>
    );
}

export default NotificationIcon;
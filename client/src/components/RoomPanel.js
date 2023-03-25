import styles from "./RoomPanel.module.css";
import { useState } from "react";
const RoomPanel = ({ rooms, onSwitchRoom }) => {
    const [activeRoom, setCurrentRoom] = useState(1);

    return ( 
        <div className={styles.roompanel}>
            <span className={styles.roompanelheader}>Rooms</span><hr className={styles.hr}/>
            {rooms.map((room) => (
                <div className={!(activeRoom===room.roomID) ? 
                    styles.roompanelitem : styles.roompanelitemcurrent}
                    onClick={() => {
                        setCurrentRoom(room.roomID);
                        onSwitchRoom(room.roomID);
                    }} 
                    key={room.roomID}>
                    {room.name}
                </div>
            ))}
        </div>
    );
}
 
export default RoomPanel;
import styles from "./RoomPanel.module.css";

const RoomPanel = ({ rooms, activeRoom, onSwitchRoom }) => {
    const x = true;
    return ( 
        <div className={styles.roompanel}>
            <span className={styles.roompanelheader}>Rooms</span><hr className={styles.hr}/>
            {rooms.map((room) => (
                <div className={!x ? styles.roompanelitem : styles.roompanelitemcurrent}
                    onClick={() => onSwitchRoom(room.roomID)} 
                    key={room.roomID}>
                    {room.name}
                </div>
            ))}
        </div>
    );
}
 
export default RoomPanel;
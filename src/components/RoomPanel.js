import styles from "./RoomPanel.module.css";

const RoomPanel = ({ rooms, activeRoom, onSwitchRoom }) => {

    return ( 
        <div className={styles.roompanel}>
            <span className={styles.roompanelheader}>Rooms</span><br /><hr className={styles.hr}/>
            {rooms.map((room) => (
                <div className={styles.roompanelitem} onClick={() => onSwitchRoom(room.roomID)} key={room.roomID}>{room.name}</div>
            ))}
        </div>
    );
}
 
export default RoomPanel;
import styles from "./RoomPanel.module.css";

const RoomPanel = ({ rooms, onSwitch }) => {

    return ( 
        <div className={styles.roompanel}>
            <span className="roompanelheader">Rooms</span><br />
            {rooms.map((room) => (
                <div className={styles.roompanelitem} onClick={() => onSwitch(room.roomID)} key={room.roomID}>{room.name}</div>
            ))}
        </div>
    );
}
 
export default RoomPanel;
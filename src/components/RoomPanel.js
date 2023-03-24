import styles from "./RoomPanel.module.css";

const RoomPanel = ({ rooms }) => {
    return ( 
        <div className={styles.roompanel}>
            <span className="roompanelheader">Rooms</span><br />
            {rooms.map((room) => (
                <div className={styles.roompanelitem}>{room.name}</div>
            ))}
        </div>
    );
}
 
export default RoomPanel;
import Navbar from "../components/Navbar"
import styles from "./AccountPage.module.css";
import AccountPanel from "../components/AccountPanel";
import RoomPanel from "../components/RoomPanel";
import { useState, useEffect } from "react";
import FilterPanel from "../components/FilterPanel";
import DoubtTabs from "../components/DoubtTabs";

const AccountPage = () => {
    const [rooms, setRooms] = useState([{roomID: 1, name: "CS"}, {roomID: 2, name: "Electronics"}]);


    return ( <div className="accountpage">
        <div className={styles.content}>
            <Navbar />
            <div className={styles.accountpagecontent}>
                <div className={styles.leftsidebar}>
                    {/* <AccountPanel /> */}
                    <RoomPanel rooms={rooms}/>
                </div>
                <div className={styles.centresidebar}>
                    <DoubtTabs/>
                </div>
                <div className={styles.rightsidebar}>
                    <FilterPanel/>
                </div>
            </div>
        </div>
    </div>);
}
 
export default AccountPage;
import { useNavigate } from "react-router-dom";
import AccountPanel from "../components/AccountPanel";
import Navbar from "../components/Navbar"
import OverlaySol from"../components/OverlaySol"
import RoomPanel from "../components/RoomPanel";
import DoubtList from "../components/DoubtList";
import styles from "./DoubtPage.module.css";
import { useState, useEffect } from "react";
const settings = require("../settings");

const SolutionPage = () => {
    const nav = useNavigate();
    const rooms =settings.rooms;
    const [username, setUsername] = useState("var user");

    const roomSwitch = (x) => {
        nav("/doubtpage/?room="+x);
    };

    const solutionHandler = () => {

    };

    const loadDoubt = (x, y) => {
        // access API for doubt x, y else return to login
    };

    useEffect(() => {
        if(!settings.isLoggedIn()) {
            nav("/");
        }
        setUsername(settings.getUsername());
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("room") && urlParams.has("doubt")) {
            const x = parseInt(urlParams.get("room"));
            const y = parseInt(urlParams.get("doubt"));
            loadDoubt(x, y);                 
        } else {
            // nav("/");
        }
    }, []);

    return ( <div className="solutionpage">
        <div className={styles.content}>
            <Navbar />
            <div className={styles.doubtpagecontent}>
                <div className={styles.leftsidebar}>
                    <AccountPanel username={username}/>
                    <RoomPanel rooms={rooms} onSwitchRoom={roomSwitch}/>
                </div>
                <div className={styles.centresidebar}>
                    <DoubtList />
                </div>
                <div className={styles.rightsidebar}>
                    <OverlaySol postSolution={solutionHandler}/>
                </div>
            </div>
        </div>
    </div>);
}
 
export default SolutionPage;
import { useNavigate } from "react-router-dom";
import AccountPanel from "../components/AccountPanel";
import Navbar from "../components/Navbar"
import OverlaySol from"../components/OverlaySol"
import RoomPanel from "../components/RoomPanel";
import styles from "./DoubtPage.module.css";
import { useState, useEffect } from "react";
import SolutionList from "../components/SolutionList";

const settings = require("../settings");
const SolutionPage = () => {
    const nav = useNavigate();
    const rooms =settings.rooms;
    const [username, setUsername] = useState("var user");
    const [Solutions, setSolutions] = useState([
        {
          doubtID: 25,
          body: "when we need to find current in common mode of differential amplifier do we divide the current equally",
          username: "Amal",
    
        },
        {
          doubtID: 21,
          body: "BODYIHIDSSHO",
          username: "Amal"
        },
        
    ]);

    const roomSwitch = (x) => {
        nav("/doubtpage/?room="+x);
    };

    const solutionHandler = (data) => {
        setSolutions(solution=>{
            return([data,...solution])
            })
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
                    <SolutionList solutions={Solutions}/>
                </div>
                <div className={styles.rightsidebar}>
                    <OverlaySol postSolution={solutionHandler} username={username}/>
                </div>
            </div>
        </div>
    </div>);
}
 
export default SolutionPage;
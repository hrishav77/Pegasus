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
    const [doubt, setDoubt] = useState({});
    const [solutions, setSolutions] = useState([
        // {
        //   doubtID: 25,
        //   body: "when we need to find current in common mode of differential amplifier do we divide the current equally",
        //   username: "Amal",
    
        // },
        // {
        //   doubtID: 21,
        //   body: "BODYIHIDSSHO",
        //   username: "Amal"
        // },
        
    ]);

    const roomSwitch = (x) => {
        nav("/doubtpage/?room="+x);
    };

    const solutionHandler = async (data) => {
        setSolutions(solution=>{
            return([data,...solution])
        });
        info.roomID = currentRoom.roomID;
        let url = backend+'/api/doubts/postdoubt';
        let config = settings.getToken();
        let username = settings.getUsername();
        config.method = "POST";
        config.body = JSON.stringify(info);
        console.log(info);
        let x = await fetch(url, config);
    };

    const loadDoubt = async (x, y) => {
        let url = settings.backend+'/api/solutions/'+x.toString()+"/"+y.toString();
        let config = settings.getToken();
        let username = settings.getUsername();
        config.method = "POST";
        // config.body = JSON.stringify({
        //     roomID: currentRoom.roomID,
        //     username: username,
        //     number: 0
        // });
        let a = await fetch(url, config);//.then((res) => res.json()).then((data) => console.log(data));
        a = await a.json();
        if (Array.isArray(a)) {
            console.log(a);
            setSolutions(a.reverse());
        }
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
            nav("/");
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
                    <SolutionList doubt={doubt} solutions={solutions}/>
                </div>
                <div className={styles.rightsidebar}>
                    <OverlaySol postSolution={solutionHandler} username={username}/>
                </div>
            </div>
        </div>
    </div>);
}
 
export default SolutionPage;
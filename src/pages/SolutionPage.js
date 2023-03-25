import { Flex, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AccountPanel from "../components/AccountPanel";
import Navbar from "../components/Navbar"
import Overlay from "../components/OverlayPost";
import OverlaySol from"../components/OverlaySol"
import RoomPanel from "../components/RoomPanel";
import styles from "./DoubtPage.module.css";
import { useState } from "react";
const settings = require("../settings");

const SolutionPage = () => {
    const nav = useNavigate();
    const rooms =settings.rooms;
    const [username, setUsername] = useState("var user");
    const [currentDoubt, setCurrentDoubt] = useState({roomID: 1, name: "DEFAULT"});

    const roomSwitch = (x) => {
        nav("/doubtpage/?room="+x);
    };

    const solutionHandler = () => {

    };

    return ( <div className="solutionpage">
        <div className={styles.content}>
            <Navbar />
            <div className={styles.doubtpagecontent}>
                    <div className={styles.leftsidebar}>
                        <AccountPanel username={username}/>
                        <RoomPanel rooms={rooms} onSwitchRoom={roomSwitch}/>
                    </div>
                
                <div className={styles.rightsidebarsol}>
                    <Flex mt="10px" mr="5px">
                        <Spacer/>
                    <OverlaySol postSolution={solutionHandler}/>
                    </Flex>
                    
                </div>
            </div>
        </div>
    </div>);
}
 
export default SolutionPage;
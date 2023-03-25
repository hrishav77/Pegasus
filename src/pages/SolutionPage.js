import { Spacer } from "@chakra-ui/react";
import AccountPanel from "../components/AccountPanel";
import Navbar from "../components/Navbar"
import Overlay from "../components/OverlayPost";
import OverlaySol from"../components/OverlaySol"
import RoomPanel from "../components/RoomPanel";
import styles from "./DoubtPage.module.css";

const settings = require("../settings");
const rooms=settings.rooms;
const username="var user"

const SolutionPage = () => {
    return ( <div className="solutionpage">
        <div className={styles.content}>
            <Navbar />
            <div className={styles.doubtpagecontent}>
                    <div className={styles.leftsidebar}>
                        <AccountPanel username={username}/>
                        <RoomPanel rooms={rooms}/>
                    </div>
                
                <div className={styles.rightsidebarsol}>
                    <OverlaySol/>
                </div>
            </div>
        </div>
    </div>);
}
 
export default SolutionPage;
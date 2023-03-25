import Navbar from "../components/Navbar"
import styles from "./DoubtPage.module.css";
import AccountPanel from "../components/AccountPanel";
import RoomPanel from "../components/RoomPanel";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FilterPanel from "../components/FilterPanel";
import DoubtTabs from "../components/DoubtTabs";
import HelpBox from "../components/HelpBox";

const settings = require("../settings");

const AccountPage = () => {
    const backend = settings.backend;
    const nav = useNavigate();
    const [rooms, setRooms] = useState([{roomID: 1, name: "CS"}, {roomID: 2, name: "Electronics"}]);
    const [yourDoubts, setYourDoubts] = useState([
        {
          doubtID: 25,
          topic:"microelectronics",
          subtopic:"diff amp",
          title: "TITLEEIJJEI",
          body: "BODYIHIDSSHO",
          userID: "Amal",
          date: "Today",
          doubtDetail: "DETAIL DETAILS"
        },
        {
          doubtID: 21,
          topic:"microprocc",
          subtopic:"mod7",
          title: "TITLEEIJJEI",
          body: "BODYIHIDSSHO",
          userID: "Amal",
          date: "Today",
          doubtDetail: "DETAIL DETAILS"
        }
      ]);
    const [starredDoubts, setStarredDoubts] = useState([
        // {
        //   doubtID: 25,
        //   topic:"microelectronics",
        //   subtopic:"diff amp",
        //   title: "TITLEEIJJEI",
        //   body: "BODYIHIDSSHO",
        //   userID: "Amal",
        //   date: "Today",
        //   doubtDetail: "DETAIL DETAILS"
        // },
        // {
        //   doubtID: 21,
        //   topic:"microprocc",
        //   subtopic:"mod7",
        //   title: "TITLEEIJJEI",
        //   body: "BODYIHIDSSHO",
        //   userID: "Amal",
        //   date: "Today",
        //   doubtDetail: "DETAIL DETAILS"
        // }
    ]);

    const roomSwitch = (x) => {
        nav("/doubtpage/?room="+x);
    }

    const loadDoubts = async () => {
        let url = backend+'/api/doubts/filters';
        let config = settings.getToken();
        let username = settings.getUsername();
        config.method = "POST";
        config.body = JSON.stringify({
             sender: username
        });
        let x = await fetch(url, config);//.then((res) => res.json()).then((data) => console.log(data));
        x = await x.json();
        if (Array.isArray(x)) {
            setYourDoubts(x);
        }
        url = backend+'/api/doubts/starreddoubts';
        config.body = JSON.stringify({
            username: username
        });
        let y = await fetch(url, config);
        y = await y.json();
        if (Array.isArray(y)) {
            setStarredDoubts(y);
        }
    };

    useEffect(() => {
        loadDoubts();
    }, []);

    return ( <div className="accountpage">
        <div className={styles.content}>
            <Navbar />
            <div className={styles.doubtpagecontent}>
                <div className={styles.leftsidebar}>
                    {/* <AccountPanel /> */}
                    <RoomPanel rooms={rooms} onSwitchRoom={roomSwitch}/>
                </div>
                <div className={styles.centresidebar}>
                    <DoubtTabs yourDoubts={yourDoubts} starredDoubts={starredDoubts}/>
                </div>
                <div className={styles.rightsidebar}>
                    {/* <FilterPanel/> */}
                    <HelpBox />
                </div>
            </div>
        </div>
    </div>);
}
 
export default AccountPage;
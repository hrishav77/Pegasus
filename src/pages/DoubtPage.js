import Navbar from "../components/Navbar"
import AccountPanel from "../components/AccountPanel";
import RoomPanel from "../components/RoomPanel";
import SearchTool from "../components/SearchTool";
import styles from "./DoubtPage.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DoubtList from "../components/DoubtList";
import Overlay from "../components/OverlayPost";
import FilterPanel from "../components/FilterPanel";
import Hamburger from "../components/Hamburger";
import { Flex } from "@chakra-ui/react";

const settings = require('../settings');

const DoubtPage = () => {
    const nav = useNavigate();
    const backend = settings.backend;
    const rooms = settings.rooms;
    const [username, setUsername] = useState("var user");
    const [currentRoom, setCurrentRoom] = useState({roomID: 1, name: "DEFAULT"});
    const [doubts, setDoubts] = useState([
        {
          doubtID: 25,
          topic:"microelectronics",
          subtopic:"diff amp",
          title: "differential applifier",
          body: "when we need to find current in common mode of differential amplifier do we divide the current equally",
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
        },
    ]);
     
    const doubtHandler=(info)=>{ 
      setDoubts(doubts=>{
      return([info,...doubts])
      })
    }

    const loadDoubtsFromRoom = (roomID) => {
      // Make an api call here and put the dictionary in x
      // setDoubts(x);
    };

    const applyFilter = (data) => {
      let {sender, topic, subtopic} = data;
      console.log(sender+"XX"+topic+"XX"+subtopic);
    };

    const roomSwitch = (x) => {
      nav("/doubtpage/?room="+x);
      let obj = rooms.find(o => o.roomID === x);
      setCurrentRoom(obj);
    }

    useEffect(() => {
      if(!settings.isLoggedIn()) {
        nav("/");
      }
      setUsername(settings.getUsername);
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("room")) {
        const x = parseInt(urlParams.get("room"));
        let obj = rooms.find(o => o.roomID === x);
        setCurrentRoom(obj);
      }
      else {
        // navigating to room 1
      }
    }, []);

    useEffect(() => {
      loadDoubtsFromRoom(currentRoom.roomID);
    }, [currentRoom]);

    return (
        <Flex className="doubtpage">
            <Flex  className={styles.content}>
                <Navbar room={currentRoom.name}/>
                <div className={styles.doubtpagecontent}>
                    <Flex className={styles.leftsidebar}>
                        <AccountPanel username={username}/>
                        <RoomPanel rooms={rooms} onSwitchRoom={roomSwitch}/>
                    </Flex>
                    <div className={styles.centresidebar}>
                        <SearchTool/>
                        <DoubtList doubts={doubts}/>
                    </div>
                    <div className={styles.rightsidebar}>
                        <FilterPanel onFilter={applyFilter}/>
                        <Overlay postDoubt={doubtHandler} username={username}/>
                        
                    </div>
                </div>
            </Flex>
        </Flex>
    )
}
 
export default DoubtPage;
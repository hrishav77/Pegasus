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
        // {
        //   doubtID: 25,
        //   topic:"microelectronics",
        //   subtopic:"diff amp",
        //   title: "differential applifier",
        //   body: "when we need to find current in common mode of differential amplifier do we divide the current equally",
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
        // },
    ]);
     
    const doubtHandler = async(info) => { 
      setDoubts(doubts=>{
      return([info,...doubts])
      });
      info.roomID = currentRoom.roomID;
      let url = backend+'/api/doubts/postdoubt';
      let config = settings.getToken();
      let username = settings.getUsername();
      config.method = "POST";
      config.body = JSON.stringify(info);
      console.log(info);
      let x = await fetch(url, config);//.then((res) => res.json()).then((data) => console.log(data));
      // x = await x.json();
      // if (Array.isArray(x)) {
      //     console.log(x);
      //     setDoubts(x);
      // }
    }

    const loadDoubtsFromRoom = async () => {
      let url = backend+'/api/doubts/getroomdoubts';
      let config = settings.getToken();
      let username = settings.getUsername();
      config.method = "POST";
      config.body = JSON.stringify({
            roomID: currentRoom.roomID,
            username: username,
            number: 0
      });
      let x = await fetch(url, config);//.then((res) => res.json()).then((data) => console.log(data));
      x = await x.json();
      if (Array.isArray(x)) {
          console.log(x);
          setDoubts(x.reverse());
      }
    };

    const applyFilter = async (data) => {
      let {sender, topic, subtopic} = data;
      let url = backend+'/api/doubts/filters';
      let config = settings.getToken();
      let username = settings.getUsername();
      config.method = "POST";
      config.body = JSON.stringify({
            roomID: currentRoom.roomID,
            username: username,
            number: 0,
            sender: sender,
            topic: topic,
            subtopic: subtopic
      });
      let x = await fetch(url, config);//.then((res) => res.json()).then((data) => console.log(data));
      x = await x.json();
      if (Array.isArray(x)) {
          console.log(x);
          setDoubts(x.reverse());
      }
    };

    const roomSwitch = (x) => {
      nav("/doubtpage?room="+x);
      let obj = rooms.find(o => o.roomID === x);
      setCurrentRoom(obj);
    }

    useEffect(() => {
      if(!settings.isLoggedIn()) {
        nav("/");
      }
      setUsername(settings.getUsername());
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
      loadDoubtsFromRoom();
    }, [currentRoom]);

    return (
        <Flex className="doubtpage">
            <Flex  className={styles.content}>
                <Navbar room={currentRoom.name} roomSwitch={roomSwitch}/>
                <div className={styles.doubtpagecontent}>
                    <div className={styles.leftsidebar}>
                        <AccountPanel username={username}/>
                        <RoomPanel rooms={rooms} onSwitchRoom={roomSwitch}/>
                    </div>
                    <div className={styles.centresidebar}>
                        <SearchTool/>
                        <DoubtList doubts={doubts} roomID={currentRoom.roomID} buttonBarVisible={true}/>
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
import Navbar from "../components/Navbar"
import AccountPanel from "../components/AccountPanel";
import RoomPanel from "../components/RoomPanel";
import SearchTool from "../components/SearchTool";
import styles from "./DoubtPage.module.css";
import { useState, useEffect } from "react";
import DoubtList from "../components/DoubtList";
import Overlay from "../components/OverlayPost";
import FilterPanel from "../components/FilterPanel";

const settings = require('../settings');

const DoubtPage = () => {
    const backend = settings.backend;
    const [currentRoom, setCurrentRoom] = useState({roomID: 1, name: "DEFAULT"});
    //const [rooms, setRooms] = useState([{roomID: 1, name: "CS"}, {roomID: 2, name: "Electronics"}]);
    const rooms = settings.rooms;
    const [doubts, setDoubts] = useState([
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
     
    const doubthandler=(info)=>{ 
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

    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("room")) {
        const x = parseInt(urlParams.get("room"));
        let obj = rooms.find(o => o.roomID === x);
        setCurrentRoom(obj);
        console.log(x);
      }
      else {
        // loadDoubtsFromRoom(1);
        // let obj = rooms.find(o => o.roomID === 1).roomTitle;
        // setCurrentRoomName(obj);
        // navigating to room 1
      }
    }, []);

    useEffect(() => {
      //let obj = rooms.find(o => o.roomID === currentRoom.roomID);
      //setCurrentRoom(obj);
      loadDoubtsFromRoom(currentRoom.roomID);
    }, [currentRoom]);

    const username="var user"
    return (
        <div className="doubtpage">
            <div className={styles.content}>
                <Navbar room={currentRoom.name}/>
                <div className={styles.doubtpagecontent}>
                    <div className={styles.leftsidebar}>
                        <AccountPanel username={username}/>
                        <RoomPanel rooms={rooms}/>
                    </div>
                    <div className={styles.centresidebar}>
                        <SearchTool/>
                        <DoubtList doubts={doubts}/>
                    </div>
                    <div className={styles.rightsidebar}>
                        <FilterPanel onFilter={applyFilter}/>
                        <Overlay setDoubts={doubthandler} username={username}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default DoubtPage;
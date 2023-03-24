import Navbar from "../components/Navbar"
import AccountPanel from "../components/AccountPanel";
import RoomPanel from "../components/RoomPanel";
import SearchTool from "../components/SearchTool";
import styles from "./DoubtPage.module.css";
import { useState, useEffect } from "react";
import DoubtList from "../components/DoubtList";
import Overlay from "../components/Overlay";
import FilterPanel from "../components/FilterPanel";
// Components Required 
// 

const DoubtPage = () => {
    const [currentRoom, setCurrentRoom] = useState({roomID: 1, name: "DEFAULT"});
    const [rooms, setRooms] = useState([{roomID: 1, name: "CS"}, {roomID: 2, name: "Electronics"}]);
    const [doubts, setDoubts] = useState([
        {
          doubtID: 25,
          title: "TITLEEIJJEI",
          body: "BODYIHIDSSHO",
          userID: "Amal",
          date: "Today",
          doubtDetail: "DETAIL DETAILS"
        },
        {
          doubtID: 22,
          title: "TITLEEIJJEI",
          body: "BODYIHIDSSHO",
          userID: "aryan",
          date: "Today",
          doubtDetail: "DETAIL DETAILS"
        }
        
      ]);
     
        const doubthandler=(info)=>{
     
          setDoubts(doubts=>{
            return([info,...doubts])
          })
        }

    useEffect(() => {
      
    }, []);

    return (
        <div className="doubtpage">
            <div className={styles.content}>
                <Navbar room={currentRoom.name}/>
                <div className={styles.doubtpagecontent}>
                    <div className={styles.leftsidebar}>
                        <AccountPanel />
                        <RoomPanel rooms={rooms}/>
                    </div>
                    <div className={styles.centresidebar}>
                        <SearchTool/>
                        <DoubtList doubts={doubts}/>
                    </div>
                    <div className={styles.rightsidebar}>
                        <FilterPanel/>
                        <Overlay setDoubts={doubthandler}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default DoubtPage;
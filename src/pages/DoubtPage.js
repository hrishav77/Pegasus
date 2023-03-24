import Navbar from "../components/Navbar"
import AccountPanel from "../components/AccountPanel";
import RoomPanel from "../components/RoomPanel";
import SearchTool from "../components/SearchTool";
import styles from "./DoubtPage.module.css";
import { useState } from "react";
import DoubtList from "../components/DoubtList";
// Components Required 
// 

const DoubtPage = () => {
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
        },
        {
          doubtID: 22,
          title: "TITLEEIJJEI",
          body: "BODYIHIDSSHO",
          userID: "aryan",
          date: "Today",
          doubtDetail: "DETAIL DETAILS"
        },
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
          },      {
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

    // return ( 
    //     <div className={styles.doubtspage}>
    //         <div className={styles.content}>
    //             <Navbar currentRoomName={currentRoomName}/>
    //             <div className={styles.doubtpagecontents}>
    //                 <div className={styles.leftsidebar}>
    //                     <UserPanel />
    //                     <RoomsPanel rooms={rooms} navRoom={(x) => setCurrentRoom(x)}/>
    //                 </div>
    //                 {!postState ? <div className={styles.centrebar}>
    //                     <SearchTool />
    //                     <DoubtList roomID={currentRoom} doubts={doubts} buttonBarVisible={true}/>
    //                     </div> : <div className={styles.centrebar}>
    //                     <DoubtBox />
    //                     </div>}
    //                 <div className={styles.rightsidebar}>
    //                     <FiltersPanel applyFilter={(x, y, z) => applyFilter(x, y, z)}/>
    //                     <Button
    //                     buttonText={!postState ? "Ask Doubt" : "Back"}
    //                     logoutButtonPadding="6px 20px"
    //                     logoutButtonOverflow="unset"
    //                     logoutButtonAlignItems="flex-start"
    //                     logoutButtonJustifyContent="flex-start"
    //                     buttonTextFontSize="24px"
    //                     onClick={() => setPostState(!postState)}
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //  );
    return (
        <div className="doubtpage">
            <div className={styles.content}>
                <Navbar />
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

                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default DoubtPage;
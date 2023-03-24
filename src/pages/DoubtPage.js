import Navbar from "../components/Navbar"
import AccountPanel from "../components/AccountPanel";
import RoomPanel from "../components/RoomPanel";
import SearchTool from "../components/SearchTool";
import styles from "./DoubtPage.module.css";
import { useState } from "react";
// Components Required 
// 

const DoubtPage = () => {
    const [rooms, setRooms] = useState([{roomID: 1, name: "CS"}, {roomID: 2, name: "Electronics"}]);

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
                        <SearchTool />

                    </div>
                    <div className={styles.rightsidebar}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default DoubtPage;
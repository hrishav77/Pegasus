import styles from "./HelpBox.module.css";

const settings = require("../settings");

export default function HelpBox(){
    const appName = settings.appName;
    return (
        <div className={styles.helpbox}>
            <h2 className="help">HELP</h2>
            <p>Welcome to your {appName} Account Dashboard!</p><br />
            <p>Here, you can view doubts personally handpicked by you, for you. Use 
                this Dashboard to effectively view the solutions to doubts that puzzle you.</p><br />
            <p>If you wish to continue solving doubts on the forum, pick one of the Subject Rooms
                on the left side panel and proceed there to continue solving.</p><br />
        </div>
    );
}
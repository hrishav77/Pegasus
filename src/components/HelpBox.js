const settings = require("../settings");

export default function HelpBox(){
    const appName = settings.appName;
    return (
        <div className="helpBox">
            <h2 className="help">HELP</h2>
            <p>Welcome to your {appName} Account Dashboard</p>
        </div>
    );
}
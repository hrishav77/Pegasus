import AuthWidget from "../components/AuthWidget";
import styles from "./LoginPage.module.css";

const LoginPage = () => {  
  return (
  <div className={styles.loginpage}>
    <div className={styles.content}>
      <div className={styles.leftsidebar}>
        <div className={styles.apptitle}>Querious</div>
        <div className={styles.apptitle}>
          Querious is an online forum for trading your subject doubts among like-minded
          students. It allows you to ask a doubt to the forum, solve doubts posted by your peers 
          and prepare for competitive exams through collaboration.<br />
          Join Querious to unlock your full potential!
          </div>
      </div>
      <div className={styles.rightsidebar}>
        <AuthWidget />
      </div>
    </div>
  </div>);
}
 
export default LoginPage;

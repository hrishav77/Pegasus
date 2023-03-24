import { Button } from '@chakra-ui/react'
import styles from "./AccountPanel.module.css";

const AccountPanel = () => {
    return (<div className={styles.accountpanel}>
        <span className={styles.usernameSpan}>USERNAGIYGEIUGFOGO</span>
        <Button bg="#00141B" borderRadius="10px" _hover={{ bg: '#5b6166' }} color="white">View Profile &gt;</Button>
    </div>);
}
 
export default AccountPanel;
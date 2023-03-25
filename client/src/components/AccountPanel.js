import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styles from "./AccountPanel.module.css";

const AccountPanel = (props) => {
    return (<div className={styles.accountpanel}>
        <span className={styles.usernameSpan}>{props.username}</span>
        <Button bg="#00141B" borderRadius="10px" _hover={{ bg: '#5b6166' }} color="white">
        <Link to="/account"> View Profile </Link>
     
            </Button>
    </div>);
}
 
export default AccountPanel;
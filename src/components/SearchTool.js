import { Input } from '@chakra-ui/react';
import styles from "./SearchTool.module.css";

const SearchTool = () => {
    return (
        <div className={styles.searchtool}>
            <Input className={styles.searchbar}/>
            <button className={styles.searchbutton}>
                <img className={styles.searchIcon} alt="" src="../search.svg" />
            </button>
        </div>
    );
}
 
export default SearchTool;
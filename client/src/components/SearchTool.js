import { useState } from 'react';
import { Input } from '@chakra-ui/react';
import styles from "./SearchTool.module.css";

const SearchTool = ({ search }) => {
    const [searchText, setSearchText] = useState("");
    const searchHandler = (event) => {
        setSearchText(event.target.value);
    };
    const searchClick = () => {
        search(searchText);
    }
    return (
        <div className={styles.searchtool}>
            <Input className={styles.searchbar} bg="aliceblue" onChange={searchHandler}/>
            <button className={styles.searchbutton} onClick={searchClick}>
                <img className={styles.searchIcon} alt="" src="../search.svg" />
            </button>
        </div>
    );
}
 
export default SearchTool;
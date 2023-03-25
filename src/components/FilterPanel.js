import styles from './FilterPanel.module.css'
import { Button } from '@chakra-ui/react';
import { useState } from 'react';

export default function FilterPanel({ onFilter }) {
    const [sender,setSender]=useState("")
    const [topic,setTopic]=useState("");
    const [subtopic,setSubtopic]=useState("");

    const senderHandler=(event)=>{
        setSender(event.target.value);
    };
     
    const topicHandler=(event)=>{
        setTopic(event.target.value);
    };
    const subtopicHandler=(event)=>{
        setSubtopic(event.target.value)
    };

    const applyFilter = (event) => {
        onFilter({sender, topic, subtopic});
    };

    return(
        <div className={styles.filterContainer}>
            <h2 className={styles.filterHeader}>FILTER</h2>
            <div className="searchBars">
                <div className={styles.row}>
                    <h3 className={styles.filterTitle}>Topic:</h3>
                    <input type="text" onChange={topicHandler}/>
                </div>
                <div className={styles.row}>
                    <h3 className={styles.filterTitle}>Subtopic:</h3>
                    <input type="text" onChange={subtopicHandler}/>
                </div>
                <div className={styles.row}>
                    <h3 className={styles.filterTitle}>Sender:</h3>
                    <input type="text" onChange={senderHandler}/>
                </div>
            </div>
            <Button bg="#00141B" borderRadius="10px" _hover={{ bg: '#5b6166' }} color="white" m='5' mt='0' onClick={applyFilter}>Search </Button>
            
            {/* <label className='label' ><input type="checkbox" name='starredDoubts' className='checkBox' />Show Starred Doubts</label> */}
        </div>
    )
}
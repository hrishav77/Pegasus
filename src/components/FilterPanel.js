import './FilterPanel.css'
import { Button } from '@chakra-ui/react';


export default function FilterPanel() {
    return(
        <div className="filterContainer">
            <h2>FILTER</h2>
            <div className="searchBars">
                <div className="row">
                    <h3>Topic:</h3>
                    <input type="text" />
                </div>
                <div className="row">
                    <h3>Subtopic:</h3>
                    <input type="text" />
                </div>
                <div className="row">
                    <h3>Sender:</h3>
                    <input type="text" />
                </div>
            </div>
            <Button bg="#00141B" borderRadius="10px" _hover={{ bg: '#5b6166' }} color="white" m='5' mt='0'>Search </Button>
            
            <label className='label'><input type="checkbox" name='starredDoubts' className='checkBox' />Show Starred Doubts</label>
        </div>
    )
}
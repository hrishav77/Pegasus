import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Doubtbox from './Doubtbox'
import './DoubtList.css'

function DoubtList(props) {
  if (props.doubts!=[]) {
    return( 
    <div className='doubtList'>
      {props.doubts.map((doubt)=>(
        <div className='singleDoubt' key={doubt.doubtID}><Doubtbox title={doubt.title} body={doubt.body} userID={doubt.userID} topic={doubt.topic} subtopic={doubt.subtopic}/></div>
      ))}
    </div>);
  } else {
    return(
    <div className="doubtList">
      <div>{props.onEmptyMessage}HELLOJIOJOIH</div>
    </div>);
  }
}

DoubtList.defaultProps = {
  doubts: [],
  onEmptyMessage: "Default on-empty message"
};

export default DoubtList;

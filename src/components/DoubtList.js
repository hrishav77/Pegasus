import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Doubtbox from './Doubtbox'
import './DoubtList.css'

function DoubtList(props) {
  if (props.doubts!=[]) {
    return( 
    <div className='doubtList'>
      {props.doubts.map((doubt)=>(
        <div className='singleDoubt' key={doubt.doubtID}>
          <Doubtbox title={doubt.title}
            body={doubt.body} 
            userID={doubt.userID}
            roomID={props.roomID}
            doubtID={doubt.doubtID}
            topic={doubt.topic} 
            subtopic={doubt.subtopic}
            buttonBarVisible={props.buttonBarVisible}/>
          </div>
      ))}
    </div>);
  } else {
    return(
    <div className="doubtList">
      <div>{props.onEmptyMessage}DEFAULT</div>
    </div>);
  }
}

DoubtList.defaultProps = {
  doubts: [],
  onEmptyMessage: "Default on-empty message"
};

export default DoubtList;

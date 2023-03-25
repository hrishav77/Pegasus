import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Doubtbox from './Doubtbox'
import './DoubtList.css'
import SolutionBox from './SolutionBox';

export default function SolutionList(props) {
  if (props.solutions!=[]) {
    return( 
    <div className='doubtList'>
      {props.solutions.map((solution)=>(
        <div className='singleDoubt' key={solution.doubtID}>
          <SolutionBox username={solution.username} body={solution.body}/>
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

// DoubtList.defaultProps = {
//   doubts: [],
//   onEmptyMessage: "Default on-empty message"
// };



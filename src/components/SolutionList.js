import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Doubtbox from './Doubtbox'
import './DoubtList.css'
import SolutionBox from './SolutionBox';
import MainDoubtBox from './MainDoubtBox';

export default function SolutionList(props) {
  if (props.solutions!=[]) {
    return( 
    <div className='doubtList'>
      <MainDoubtBox 
        date={props.doubt.date}
        title={props.doubt.title}
        body={props.doubt.body}/>
      {props.solutions.map((solution)=>(
        <div className='singleDoubt' key={solution.doubtID}>
          <SolutionBox username={solution.username} body={solution.body} date={solution.date}/>
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



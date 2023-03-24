import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Doubtbox from './Doubtbox'
import './DoubtList.css'

export default function DoubtList(props) {
  return (
   
    <div className='doubtList'>
      {props.doubts.map((doubt)=>(
          <div className='singleDoubt' key={doubt.doubtID}><Doubtbox title={doubt.title} body={doubt.body} userID={doubt.userID}/></div>
        ))
      }
    </div>
      

  )
}

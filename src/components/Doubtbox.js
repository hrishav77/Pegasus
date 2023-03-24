import { Flex, Spacer, Text,Button} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';


import { Link } from 'react-router-dom';

import Box from './Box'


let curr_dt = new Date()
let date = curr_dt.getDay() + "/" + (curr_dt.getMonth() + 1) + "/" + curr_dt.getFullYear() + " " + curr_dt.getHours() + ":" + curr_dt.getMinutes() ;
export default function Doubtbox(props) {
const [isStarred,SetStarred]=useState(false)
const starredButton=()=>{
  SetStarred((isStarred)=>{
    return !isStarred;
  })
}
  
  return (
    <Box w="100%" h="fit-content">
        <Flex fontSize="2xl">
        {props.userID}
        <Spacer/>
        <Text fontSize="lg">{date}</Text>
        </Flex>  
    <Text fontSize="xl" fontWeight="600">{props.title}</Text>
    <Text>{props.body}</Text>
    <Button borderRadius="10px" variant="outline" ><i class="fi fi-rr-star" style={{backgroundColor:isStarred?"goldenrod":""}} onClick={starredButton}></i></Button>
    <Button borderRadius="10px" variant="outline" ml="10px">
      <Link to="/solutionpage">Solutions</Link>
      </Button>
    </Box>
  )
}

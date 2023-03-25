import { Flex, Spacer, Text,Button} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';


import { Link } from 'react-router-dom';

import Box from './Box'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Alegreya&family=Bona+Nova&display=swap');
</style>


let curr_dt = new Date()
let date = curr_dt.getDay() + "/" + (curr_dt.getMonth() + 1) + "/" + curr_dt.getFullYear() + " " + curr_dt.getHours() + ":" + curr_dt.getMinutes() ;
export default function Doubtbox(props) {
const [isStarred,SetStarred]=useState(false)
const starredButton=()=>{
  SetStarred((prevStarred)=>{
   return !prevStarred;
  })
}
  
  return (
    <Box w="100%" h="fit-content">
        <Flex fontSize="sm" font-family=" 'Bona Nova', serif">
        {props.userID}
        <Spacer/>
        <Text fontSize="sm">{date}</Text>
        </Flex>  
    <Text fontSize="xl" fontWeight="600" font-family=" 'Bona Nova', serif" mb="5px">{props.title}</Text>
    <Text fontSize="lg">{props.body}</Text>
     <Flex>
<Button borderRadius="10px" variant="outline" ><i class="fi fi-rr-star" style={{backgroundColor:isStarred?"goldenrod":""}} onClick={starredButton}></i></Button>
      <Button borderRadius="10px" variant="outline" ml="10px">
      <Link to="/solutionpage">Solutions</Link>
      </Button>
      <Spacer/>
      <span style={{margin:"5px",textAlign:"right"}}>Topic:{props.topic}</span> <span style={{margin:"5px",textAlign:"right"}}>Subtopic:{props.subtopic}</span> 

    </Flex>
    
      
    </Box>
  )
}

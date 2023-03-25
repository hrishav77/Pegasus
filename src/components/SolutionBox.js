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

export default function SolutionBox(props) {
const [isStarred,SetStarred]=useState(false)
const starredButton=()=>{
  SetStarred((prevStarred)=>{
   return !prevStarred;
  })
}
  
  return (
    <Box w="100%" h="fit-content">
        <Flex fontSize="sm" font-family=" 'Bona Nova', serif">
        {props.username}
        <Spacer/>
        <Text fontSize="sm">{date}</Text>
        </Flex>  
    
    <Text fontSize="lg">{props.body}</Text>
   
      
    </Box>
  )
}

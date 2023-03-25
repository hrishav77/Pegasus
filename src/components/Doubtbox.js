import { Flex, Spacer, Text,Button} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import styles from "../pages/DoubtPage.module.css";


import { Link } from 'react-router-dom';

import Box from './Box'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Alegreya&family=Bona+Nova&display=swap');
</style>

const settings = require("../settings");

let curr_dt = new Date()
let date = curr_dt.getDay() + "/" + (curr_dt.getMonth() + 1) + "/" + curr_dt.getFullYear() + " " + curr_dt.getHours() + ":" + curr_dt.getMinutes() ;
export default function Doubtbox(props) {
  const [isStarred,SetStarred]=useState(props.starState);
  
  const starredButton = async () => {
    SetStarred(!isStarred);
    let url = settings.backend+'/api/doubts/' + (!isStarred ? 'starreddoubts' : 'unstardoubt');
    let config = settings.getToken();
    let username = settings.getUsername();
    config.method = "PUT";
    config.body = JSON.stringify({
          roomID: props.roomID,
          doubtID: props.doubtID,
          username: username,
    });
    let x = await fetch(url, config);//.then((res) => res.json()).then((data) => console.log(data));
    console.log(url);
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
      <Link to={"/solutionpage?room="+props.roomID+"&doubt="+props.doubtID}>Solutions</Link>
      </Button>
      <Spacer/>
      <div className='extras'>
      <span style={{margin:"5px",textAlign:"right"}}>Topic:{props.topic}</span> <span style={{margin:"5px",textAlign:"right"}}>Subtopic:{props.subtopic}</span> 
      </div>
    </Flex>
    
      
    </Box>
  )
}

import { Flex, Spacer, Text,Button ,Heading} from '@chakra-ui/react'


import React from 'react'
import { Link } from 'react-router-dom';

import Box from './Box'
let curr_dt = new Date()
let date = curr_dt.getFullYear() + "-" + (curr_dt.getMonth() + 1) + "-" + curr_dt.getDate() + " " + curr_dt.getHours() + ":" + curr_dt.getMinutes() + ":" + curr_dt.getSeconds();
export default function Doubtbox(props) {
  return (
    <Box w="100%" h="fit-content">
        <Flex fontSize="3xl">
        {props.username}
        <Spacer/>
        {date}
        </Flex>  
    <Text fontSize="xl" fontWeight="600">{props.title}</Text>
    <Text>{props.desc}</Text>
    <Button borderRadius="10px" variant="outline"><img src="../star.svg" alt="star" width="20px"/></Button>
    <Button borderRadius="10px" variant="outline" ml="10px">
      <Link to="/solutionpage">Solutions</Link>
      </Button>
    </Box>
  )
}

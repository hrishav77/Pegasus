import { Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Box from './Box'
let curr_dt = new Date()
let date = curr_dt.getFullYear() + "-" + (curr_dt.getMonth() + 1) + "-" + curr_dt.getDate() + " " + curr_dt.getHours() + ":" + curr_dt.getMinutes() + ":" + curr_dt.getSeconds();
export default function Doubtbox(props) {
  return (
    <Box w="100%" h="fit-content">
        <Flex>
        {props.username}
        <Spacer/>
        {date}
        </Flex>  
    <Text>{props.doubts}</Text>
    </Box>
  )
}

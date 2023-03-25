import { Box } from '@chakra-ui/react'
import React from 'react'


export default function box(props) {
  return (
    <Box p="10px" bg="rgba(255, 255, 255, 0.8)" m="15px" borderRadius="10px" w={props.w} h={props.h} >{props.children}</Box>
  )
}

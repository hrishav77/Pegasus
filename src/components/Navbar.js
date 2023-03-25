import { Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from "./Hamburger"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
</style>

export default function Navbar(props) {
  return (
    <Flex as="nav" p="10px" alignItems="center" bg="#334756" color="white" width="100%">
    <Heading>Website name</Heading>
    <Text fontSize="3xl" fontFamily="'Orbitron', sans-serif" fontWeight="400" ml="28%">{props.room}</Text>
    <Spacer/> 
    <HStack spacing="10px">
    <Button bg="#00141B" borderRadius="10px"  _hover={{ bg: '#5b6166'}}>
      <Link to="/login"> Logout</Link>
      </Button>
      <Hamburger/>
    </HStack>
    </Flex>
  )
}

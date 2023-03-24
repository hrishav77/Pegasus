import { Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'


export default function Navbar(props) {
  return (
    <Flex as="nav" p="10px" alignItems="center" bg="#334756" color="white">
    <Heading>Website name</Heading>
    <Text fontSize="3xl" fontFamily="Quicksand" fontWeight="400" ml="28%">{props.room}</Text>
    <Spacer/> 
    <HStack spacing="10px">
    <Button bg="#00141B" borderRadius="10px" _hover={{ bg: '#5b6166' }}>Online Users</Button>
    <Button bg="#00141B" borderRadius="10px"  _hover={{ bg: '#5b6166'}}>Logout</Button>
    </HStack>
    </Flex>
  )
}


import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
 
} from '@chakra-ui/react'
import React from 'react'
import { Button, useDisclosure } from "@chakra-ui/react"
import FilterPanel from './FilterPanel'
import Overlay from './OverlayPost'
import { Link } from 'react-router-dom'

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <button onClick={onOpen}>
       <img src="../hamburger.png" alt="-"  style={{height:"30px"}} />
      </button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody bg=" linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)" pt="10px">
            <FilterPanel/>
            <Overlay/>
            <div style={{marginTop:"10px"}}>  <Button bg="aliceblue" borderRadius="10px"  _hover={{ bg: '#5b6166'}}>
      <Link to="/login"> Logout</Link>
      </Button></div>
          
      
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
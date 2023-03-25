
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

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
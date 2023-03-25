

import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,   
  } from '@chakra-ui/react'
  import React from 'react'
  import { Button, useDisclosure } from "@chakra-ui/react"

import styles from "../pages/DoubtPage.module.css";
import HelpBox from "./HelpBox";

const settings = require('../settings');

  export default function HamburgHelp() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <button onClick={onOpen}>
          <div className="leftham"><img src="../hamburger.png" alt="-"  style={{height:"30px"}} /></div>
        </button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody bg=" linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)" pt="10px" className={styles.LeftHamburg}>
              <HelpBox/>          
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        </>
    )
  }
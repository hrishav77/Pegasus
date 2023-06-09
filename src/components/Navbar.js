import { Button, Divider, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";
import Hamburger from "./Hamburger";
import { useNavigate } from 'react-router-dom';
import LeftHamburg from './LeftHamburg';
import { useMediaQuery } from "@chakra-ui/media-query";
import HelpBox from './HelpBox';
import HamburgHelp from './HamburgHelp';

const settings = require("../settings");
<style>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
</style>


export default function Navbar(props) {
  const nav = useNavigate();
  
  const logout = () => {
    localStorage.removeItem("userInfo");
    nav("/login");
  };
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ])
  return (
    <Flex className={styles.navbar} as="nav" p="10px" alignItems="center" bg="#334756" color="white" width="100%">
      {isSmallScreen && <LeftHamburg roomSwitch={props.roomSwitch}/>}
    <div className={styles.signature}>
    <img src="../logo@2x.png" width="40px"/> 
    <Heading className={styles.appName}>{settings.appName}</Heading>
    </div>
      <Text fontSize="3xl" fontFamily="'Orbitron', sans-serif" fontWeight="400" >{props.room}</Text>
      <HStack className={styles.buttonBar} spacing="10px">
        <Button bg="#00141B" borderRadius="10px"  _hover={{ bg: '#5b6166'}} onClick={logout}>
          logout
        </Button>
         {window.location.pathname=="/account" && isSmallScreen && <HamburgHelp/> }
        { !window.location.pathname=="/account" && isSmallScreen && <Hamburger/> }
      </HStack>
    </Flex>
  )
}

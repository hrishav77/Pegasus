// import { Button, Divider, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from "./Navbar.module.css";
// import Hamburger from "./Hamburger";
// import { useNavigate } from 'react-router-dom';
// import LeftHamburg from './LeftHamburg';
// import { useMediaQuery } from "@chakra-ui/media-query";

// const settings = require("../settings");
// <style>
//   @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
// </style>


// export default function Navbar(props) {
//   const nav = useNavigate();
  
//   const logout = () => {
//     localStorage.removeItem("userInfo");
//     nav("/login");
//   };
//   const [isSmallScreen]=useMediaQuery("(max-width:900px)")
 
//   return (
//     // <Flex className={styles.navbar} as="nav" p="10px" alignItems="center" bg="#334756" color="white" width="100%">
//     //   {isSmallScreen && <LeftHamburg roomSwitch={props.roomSwitch}/>}
//     // <Heading className={styles.appName}>{settings.appName}</Heading>
//     //   <Text fontSize="3xl" fontFamily="'Orbitron', sans-serif" fontWeight="400" >{props.room}</Text>
//     //   <HStack className={styles.buttonBar} spacing="10px">
//     //     <Button bg="#00141B" borderRadius="10px"  _hover={{ bg: '#5b6166'}} onClick={logout}>
//     //       logout
//     //     </Button>
       
//     //     {isSmallScreen && <Hamburger/> }
//     //   </HStack>
//     // </Flex>
    
//   )
// }
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
import React from 'react';
import {Routes,Route} from "react-router-dom"
import Box from './components/Box';
import LeftBox from './components/LeftBox';
import { ChakraProvider ,extendTheme, Flex, Spacer} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Doubtbox from './components/Doubtbox';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ""
      }
    })
  }
});

const currentRoom="current room";

function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
    <Routes>
      {/* first route */}
      <Route path='/' 
      element={<>
      <Navbar room={currentRoom}/>
      <Flex >
      <LeftBox/>
   
      <Doubtbox doubts="hhiasd" username="user"/>
      <Spacer/>
      <Box  w="237px" h="345px">
       <h1>Filter</h1>
      </Box>
      </Flex>
      </>}/>
      
    
    </Routes>
    </ChakraProvider>
    </div>
  );
}

export default App;
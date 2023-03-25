import React from 'react';
import {Routes,Route} from "react-router-dom"
import Box from './components/Box';
import LeftBox from './components/LeftBox';
import { ChakraProvider ,extendTheme, Flex, Spacer} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import DoubtPage from './pages/DoubtPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import SolutionPage from './pages/SolutionPage';

import DoubtList from './components/DoubtList';



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
      <Route path='/' element={<LoginPage/>}/>
      <Route path="/doubtpage" element={<DoubtPage />}/>    
      <Route path="/login" element={<LoginPage/>}/> 
      <Route path="/account" element={<AccountPage />}/> 
      <Route path="/solutionpage" element={<SolutionPage />}/>   
    </Routes>
    </ChakraProvider>
    </div>
  );
}

export default App;

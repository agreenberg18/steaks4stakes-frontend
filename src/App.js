import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './screens/Home'
import SteakID from './screens/SteakID'
import SteakFriends from './screens/SteakFriends'

function App() {

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/steak-id" element={<SteakID />} />
          <Route path="/steak-friends" element={<SteakFriends />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

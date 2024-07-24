import React, { createContext, useState } from 'react';
import Home from './Chats/Home'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CallHome from './callsData/CallHome';

export const globalContext = createContext();

const Main = () => {

  const [user,setUser]=useState([]);
  const [chat,setchat]=useState([]);

  return (
    <div>
      <BrowserRouter>
      {/* <globalContext.Provider> */}
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/calls' element={<CallHome/>}/> 
      </Routes>
      {/* </globalContext.Provider> */}
      </BrowserRouter>
    </div>
  )
}

export default Main
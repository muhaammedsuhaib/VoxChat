import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/user/common/Sidebar';
import Auth from '../components/auth/Auth';
const Approuter = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
  
      {/* authentication  */}
      <Route path='/' element={<Auth/>}/>

    <Route path='/u/:rout/:id?' element={<Sidebar/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Approuter
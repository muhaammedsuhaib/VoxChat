import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/user/common/Sidebar';
const Approuter = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
  
      {/* authentication  */}
      {/* <Route path='/' element={<Login/>}/> */}

    <Route path='/u/:rout' element={<Sidebar/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Approuter
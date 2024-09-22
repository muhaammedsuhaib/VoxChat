import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Approuter from './routes/Approuter'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function App() {
// const [first, setfirst] = useState(false)
// const {data,isSuccess,isLoading}= useQuery({
//   queryKey:["users"],
//   queryFn:async()=>{
//     const response = await axios('http://localhost:4300/users');

//     return response.data;
//   },
//   enabled:first
// })
// if(isSuccess){

//   console.log(data);
// }
  return (
    <>
   {/* <Main/> */}
   {/* <div className="bg-yellow-300">
    <button onClick={()=>setfirst(true)}>Hello</button>
{data?.map((item,index)=>{
  return(
    <div className="list" key={index+1}>
      {item.name}
      {item.__v}
      {item._id}
    </div>
  )
})}
    list users
   </div> */}
   
   <Approuter/>
    </>
  )
}

export default App

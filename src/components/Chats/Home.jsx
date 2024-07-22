import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Userbox from './Userbox'
import Chatbox from './Chatbox'

const Home = () => {


  const [chats,setChats]=useState(null);
  const [chatopen,setChatopen]=useState(false);
  
  return (<>

  <div>
    {/* <Navbar/> */}
    {/* <Sidebar/> */}
  <div className={`w-full h-[100vh] flex  `}>
  <Navbar/>
      <Sidebar/>    
      <div className={` justify-center w-full md:w-1/2 `}>  
      <div className="hidden md:block">
 <Userbox  setChats={setChats} setChatopen={setChatopen} /></div>
 <div className="md:hidden">
 {chatopen?<Chatbox chats={chats} setChats={setChats}/> : <Userbox setChats={setChats} setChatopen={setChatopen}/>}</div>
</div>

        <div className={`hidden md:flex w-full md:w-1/2 `}>
          <div className="w-full h-screen flex items-center justify-center text-start">
           <Chatbox chats={chats} setChats={setChats} />
          </div>
        </div>
      </div>
  </div>
  
        {/* <Navbar/>
        <Sidebar/> */}
        {/* <div className="ml-16 mt-14 grid grid-cols-2 h-[calc(100vh-3.5rem)]"> */}
                {/* <Userbox />
                <Chatbox /> */}
            {/* </div> */}
    {/* <div className=''> */}
    {/* <div  className="grid grid-cols-12 "> */}

        {/* sidebar  */}
  {/* <div  className="col-span-1 p-4 w-full h-[100vh] mt-14 bg-black">


    

 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>



  </div> */}
 

  {/* chat user Box  */}
  {/* <div  className="col-span-5 p-4 w-full h-[100vh] mt-14 bg-red-800">





<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
<path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>



</div> */}



{/* chatbox  */}
  {/* <div  className="col-span-5 p-2 w-full h-[100vh] mt-14 bg-blue-800">Column 2</div>


  <div  className="col-span-1 p-1 w-full h-[100vh] mt-14 bg-green-800">Column 2</div> */}
{/* </div> */}


   

    {/* </div> */}
    </>
  )
}

export default Home










 {/* <div>
      <section className={`container mx-auto text-center ${mode?"bg-white text-black":"bg-black text-white"} `}>
      
        
      </section>
    
        <div className={`fixed bottom-0 w-full md:hidden text-start p-2 ${mode ? "bg-white text-black" : "bg-black text-white"} flex justify-around`}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <div>
          <img
                        className="h-8 w-8 rounded-full"
                        src="https://muhaammedsuhaib.github.io/Front-end-Developer-portfolio/assets/imgs/avatar.jpg"
                        alt="Profile"
                      />
          </div>
           </div>
 
    </div> */}
import React, { useState } from "react";

const Callinfo = () => {
 
  return (
    <>
    
    
    
 {/* <div className="w-full h-full flex items-center justify-center ">
      <img src="/blackbr.png" alt="logo"  width={400}/>
    </div> */}























<h1>Iam call info</h1>

<div className="w-full flex flex-col"><br /><br />

  <div className="w-full flex-1">

    {/* Profile section  */}

  <div className="w-full bg-[#F5F5F5] border-l-2 border-gray-200  p-0">
          <div className="w-full p-3 flex items-center justify-between rounded-lg">
            <div className="flex items-center">
              <img
                src="https://i.ytimg.com/vi/ATElufr0OiE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJuaATtZxg3dXNAyUiTBM-dVbiOA"
                alt="profile Image"
                className="rounded-full h-12 w-12 p-1"
              />
              <p className="ml-3 font-bold">Suhaib <br /></p>
             
            </div>
           
          </div>
        </div>
  
  {/* chat section */}
<div className="w-full  h-[75vh] overflow-auto">
 <h1>Im suhiab</h1>
 </div>

{/* buttom section  */}
        <div className="w-full  sticky bottom-0">
  <div className="flex items-center gap-3 w-full bg-[#F5F5F5] border-l-2 border-gray-200 p-0">

    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
        />
      </svg>
    </div>

    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
        />
      </svg>
    </div>

    <div className="w-96">
       <input
        className="w-full bg-transparent focus:outline-none resize-none"
        placeholder="Type a message"
      />
    </div>

    {/* <div className="">
      <textarea
        className="w-full bg-transparent focus:outline-none resize-none"
        placeholder="Type a message"
      />
    </div> */}

    {/* <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
        />
      </svg>
    </div> */}

    {/* <div className="text-end">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
</svg>

    </div> */}
  </div>
</div>
        
  </div>
</div>

    </>
  );
};

export default Callinfo;

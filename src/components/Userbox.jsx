import React, { useState } from 'react';

const Userbox = () => {

    const [data,setData]=useState([{name:'binu'},{name:'suhaib'},{name:'raman'},{name:'ravi'},{name:'haro'},{name:'ravi'},{name:'ravi'},{name:'ravi'}])
  return (
    <div className="w-full h-full ">
      <div className="w-full text-center p-5">
        <input
          type="text"
          id="last_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
        <div className="w-full  h-[75vh] mt-2 p-3 overflow-auto">

{data.map((item)=>(
    <div className="w-full  p-2 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://i.ytimg.com/vi/ATElufr0OiE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJuaATtZxg3dXNAyUiTBM-dVbiOA"
                alt="profile Image"
                className="rounded-full h-12 w-12"
              />
              <p className="ml-3 font-bold">{item.name}</p>
            </div>
            <div className="flex items-center">
              <p>03-03-2024</p>
            </div>
          </div>

))}
          
        </div>
      </div>
    </div>
  );
};

export default Userbox;

import { Menu, MenuButton, MenuItem, MenuItems, Textarea } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Chatbox() {

  const [showModal, setShowModal] = React.useState(true);

  const {id}=useParams();

  const {data,isSuccess, isLoading, isError}=useQuery({
    queryKey:["user"],
    queryFn:async ()=>{
      const response = await axios.get(`http://localhost:4300/user/${id}`);
      return response.data;
    }
  })
  
  console.log(data)
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
                  {isLoading && <p className="text-center">Loading...</p>}
                  {isError && <p className="text-center text-red-600">Error loading data. Please try again.</p>}
            {/* Full-screen Modal Content */}
            <div className="relative w-screen h-screen">
              <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between  border-b border-gray-200">
                <div className="w-full bg-[#F5F5F5] border-l-2 border-gray-200  p-0 ">

        <div className="w-full p-3 flex items-center justify-between rounded-lg">
          <div className="flex items-center">
            <img
              src="https://i.ytimg.com/vi/ATElufr0OiE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJuaATtZxg3dXNAyUiTBM-dVbiOA"
              alt="profile Image"
              className="rounded-full h-12 w-12 p-1"
            />
            <p className="ml-3 font-bold"> {data?.name}<br /><span className="text-sm"></span></p>
           
          </div>
          <div className="flex items-center gap-5">
          <div> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:scale-110 text-gray-500">
<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
</svg></div>
          <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:scale-110 text-gray-500">
<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg></div>
        







<Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full  text-sm focus:outline-none  border-none ">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:scale-150 text-gray-500">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg></div>    
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
                </div>
                
                {/* Body (Scrollable Content) */}
                <div className="flex-1 p-6 overflow-auto">
                  <p className="text-gray-700 text-lg leading-relaxed w-auto inline-block p-2 rounded-lg bg-gray-400">Hello    </p>
                  <p className="text-gray-700  text-lg leading-relaxed w-auto inline-block p-2 rounded-lg bg-green-400">Hey   </p>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200 w-full bg-[#F5F5F5]  flex ">
  <div className="">
     <Textarea
      className="w-full bg-transparent focus:outline-none resize-none border-2 rounded-lg"
      placeholder="Type a message"
    />
  </div>
  <div className="">
     <Textarea
      className="w-full bg-transparent focus:outline-none resize-none border-2 rounded-lg"
      placeholder="Type a message"
    />
  </div>



                  {/* <Link to={'/u/chat'} >
                  <button
                    className="text-red-500 font-bold uppercase px-6 py-2 text-sm mr-2"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  </Link> */}
                  {/* <button
                    className="bg-green-500 text-white font-bold uppercase px-6 py-2 text-sm rounded hover:bg-green-600"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

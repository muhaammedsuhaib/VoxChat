import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Textarea,
} from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { FaCamera, FaMicrophone, FaPaperclip, FaSearch } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { HiPaperAirplane } from 'react-icons/hi2';


export default function Chatbox() {
  const [showModal, setShowModal] = React.useState(true);

  const { id } = useParams();

  const navigation = useNavigate();

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:4300/user/${id}`);
      return response.data;
    },
  });

  const handleCameraClick = () => {
    document.getElementById('cameraInput').click();
  };
  console.log(isLoading, isSuccess);
  return (
    <>
      {showModal ? (
        <>
          <div className="relative z-50">
            {isLoading && (
              <p className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Loading...
              </p>
            )}
            {isError && (
              <p className="text-center text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Error loading data. Please try again.
              </p>
            )}
          </div>
          <div className="fixed inset-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-screen h-screen">
              <div className="w-full h-full bg-white shadow-lg overflow-hidden flex flex-col">



                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 p-4 bg-gray-100">

                  <div className="flex items-center w-full">
                    <IoMdArrowRoundBack className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors duration-200" size={20}  onClick={()=>navigation('/u/chat')}/>

                    <div className="flex items-center mx-1">
                      <img
                        src="https://pbs.twimg.com/media/E7QRfFMXMAMBepC?format=jpg&name=4096x4096"
                        alt="profile"
                        className="rounded-full h-12 w-12 object-cover"
                      />
                      <div className="ml-3">
                        <p className="font-bold text-gray-800">{data?.name}</p>
                        <span className="text-sm text-gray-600">
                          last seen at 2:57
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                      <BsTelephoneOutboundFill className=" cursor-pointer text-gray-600 hover:text-gray-800 transition-colors duration-200" size={20} />
                      <FaSearch className=" cursor-pointer text-gray-600 hover:text-gray-800 transition-colors duration-200" size={20} />

                      <Menu as="div" className="relative">
                        <Menu.Button className="flex rounded-full text-sm focus:outline-none border-none">
                          <MdMoreVert className="text-gray-600 hover:text-gray-800 transition-colors duration-200" size={20} />
                        </Menu.Button>

                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`block px-4 py-2 text-sm text-gray-700 ${
                                  active ? "bg-gray-100" : ""
                                }`}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`block px-4 py-2 text-sm text-gray-700 ${
                                  active ? "bg-gray-100" : ""
                                }`}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`block px-4 py-2 text-sm text-gray-700 ${
                                  active ? "bg-gray-100" : ""
                                }`}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </div>
                </div>

                {/*  (chat Content) */}
                <div className="flex-1 p-6 overflow-auto">
      {/* Outgoing Message */}
      <div className="flex justify-end mb-4">
        <div className="flex flex-col items-end">
          <p className="bg-blue-500 text-white text-lg leading-relaxed w-auto inline-block p-3 rounded-lg shadow-md">
            Hello
          </p>
          <span className="text-xs text-gray-300 mt-1">2:00 PM</span>
        </div>
      </div>

      {/* Incoming Message */}
      <div className="flex justify-start mb-4">
        <div className="flex flex-col items-start">
          <p className="bg-gray-200 text-gray-700 text-lg leading-relaxed w-auto inline-block p-3 rounded-lg shadow-md">
            Hey
          </p>
          <span className="text-xs text-gray-500 mt-1">2:01 PM</span>
        </div>
      </div>

      {/* Additional Messages */}
      <div className="flex justify-end mb-4">
        <div className="flex flex-col items-end">
          <p className="bg-blue-500 text-white text-lg leading-relaxed w-auto inline-block p-3 rounded-lg shadow-md">
            How are you?
          </p>
          <span className="text-xs text-gray-300 mt-1">2:02 PM</span>
        </div>
      </div>
      <div className="flex justify-start mb-4">
        <div className="flex flex-col items-start">
          <p className="bg-gray-200 text-gray-700 text-lg leading-relaxed w-auto inline-block p-3 rounded-lg shadow-md">
            I’m good, thanks!
          </p>
          <span className="text-xs text-gray-500 mt-1">2:03 PM</span>
        </div>
      </div>
    </div>

                {/* message sender */}
                <div className="p-4 border-t border-gray-200 w-full bg-[#F5F5F5] flex items-center rounded-lg shadow-md">
      <input
        id="cameraInput"
        type="file"
        accept="image/*"
        capture="camera"
        style={{ display: 'none' }} // Hide the file input
      />
      
      <button
        className="text-black p-2 rounded-full flex items-center justify-center hover:text-green-500  hover:bg-green-100 transition duration-200"
        onClick={handleCameraClick}
      >
        <FaPaperclip size={20} />
      </button>

      <div className="flex-grow mx-2">
        <Textarea
          className="w-full bg-white focus:outline-none resize-none border-2 border-gray-300 rounded-lg p-3 transition duration-300 ease-in-out hover:shadow-md"
          placeholder="Type a message"         
        />
      </div>

      <div className="flex items-center space-x-2">
        <button className="text-black p-2 rounded-full flex items-center justify-center hover:text-green-500  hover:bg-green-100 transition duration-200">
          <FaMicrophone size={20} />
        </button>
        <button className=" text-black p-2 rounded-full flex items-center justify-center hover:text-green-500  hover:bg-green-100 transition duration-200">
          <HiPaperAirplane size={20} />
        </button>
      </div>
    </div>

              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Textarea,
} from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { FaCamera, FaMicrophone, FaPaperclip, FaSearch } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { HiPaperAirplane } from 'react-icons/hi2';
import axiosInstance from "../../../api/axiosInstance";
import Loading from "../../common/Loading";


export default function Chatbox() {
  const [showModal, setShowModal] = React.useState(true);
  const [message, setMessage] = React.useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosInstance.get(`/users/${id}`);
      return response.data.data;
    },
  });

  const handleCameraClick = () => {
    document.getElementById('cameraInput').click();
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add logic to send message
      setMessage(''); // Clear input after sending
    }
  };

  if (isLoading) {
    return (
      <Loading/>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <p className="text-red-600">Error loading data. Please try again.</p>
      </div>
    );
  }

  if (isSuccess && data) {
    return (
      <div className="fixed inset-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-screen h-screen">
          <div className="w-full h-full bg-white shadow-lg overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 p-4 bg-gray-100">
              <div className="flex items-center w-full">
                <IoMdArrowRoundBack
                  className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  size={20}
                  onClick={() => navigate('/u/chat')}
                />

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
                  <BsTelephoneOutboundFill
                    className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    size={20}
                  />
                  <FaSearch
                    className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    size={20}
                  />

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

            {/* Chat Content */}
            <div className="flex-1 p-6 overflow-auto">
              {/* Outgoing Message */}
              <MessageBubble message="Hello" time="2:00 PM" type="outgoing" />
              {/* Incoming Message */}
              <MessageBubble message="Hey" time="2:01 PM" type="incoming" />
              <MessageBubble message="How are you?" time="2:02 PM" type="outgoing" />
              <MessageBubble message="I’m good, thanks!" time="2:03 PM" type="incoming" />
            </div>

            {/* Message sender */}
            <div className="p-4 border-t border-gray-200 w-full bg-[#F5F5F5] flex items-center rounded-lg shadow-md">
              <input
                id="cameraInput"
                type="file"
                accept="image/*"
                capture="camera"
                style={{ display: 'none' }} 
              />

              <button
                className="text-black p-2 rounded-full flex items-center justify-center hover:text-green-500 hover:bg-green-100 transition duration-200"
                onClick={handleCameraClick}
              >
                <FaPaperclip size={20} aria-label="Attach file" />
              </button>

              <div className="flex-grow mx-2">
                <Textarea
                  className="w-full bg-white focus:outline-none resize-none border-2 border-gray-300 rounded-lg p-3 transition duration-300 ease-in-out hover:shadow-md"
                  placeholder="Type a message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="flex items-center space-x-2">
                <button className="text-black p-2 rounded-full flex items-center justify-center hover:text-green-500 hover:bg-green-100 transition duration-200">
                  <FaMicrophone size={20} aria-label="Record voice" />
                </button>
                <button
                  className={`text-black p-2 rounded-full flex items-center justify-center hover:text-green-500 hover:bg-green-100 transition duration-200 ${
                    !message.trim() ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                >
                  <HiPaperAirplane size={20} aria-label="Send message" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function MessageBubble({ message, time, type }) {
  const isOutgoing = type === "outgoing";
  return (
    <div className={`flex ${isOutgoing ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`flex flex-col ${isOutgoing ? "items-end" : "items-start"}`}>
        <p
          className={`${
            isOutgoing ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          } text-lg leading-relaxed w-fit max-w-xs py-2 px-4 rounded-lg`}
        >
          {message}
        </p>
        <span className="text-sm text-gray-500 mt-1">{time}</span>
      </div>
    </div>
  );
}

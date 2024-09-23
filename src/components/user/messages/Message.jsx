import React, { useState } from 'react';
import Chatbox from './Chatbox';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { format } from 'date-fns';
import { FaSearch } from 'react-icons/fa';
import { MdOutlineSearchOff } from 'react-icons/md';

const Message = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  // const [selectedChat, setChats] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const {id}=useParams();

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axios('http://localhost:4300/users');
      return response.data;
    },
    refetchInterval: 60000,
  });

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = isSuccess
    ? data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="flex flex-col h-screen overflow-auto">
      <div className="w-full bg-white-50">
        <div className="w-full text-center p-3 fixed top-3 z-10">
          {!searchOpen ? (
            <div className="text-end p-2 rounded-full">
            <FaSearch className="cursor-pointe  text-black " onClick={() => setSearchOpen(true)} size={25} /></div>
          ) : (
            <div className="flex items-center">
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={handleInputChange}
                className="peer bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-[30%] p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Search..."
                aria-label="Search users"
              />
              <button className="ml-2 text-red-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 rounded-lg  transition-all duration-300" onClick={() => setSearchOpen(false)}>
                <MdOutlineSearchOff size={35}  />
              </button>
            </div>
          )}
        </div>

        <div className="flex-grow mt-14 p-3 overflow-auto">
          {isLoading && <p className="text-center">Loading...</p>}
          {isError && <p className="text-center text-red-600">Error loading data. Please try again.</p>}
          {isSuccess && filteredData.length === 0 && <p className="text-center">No users found.</p>}
          {isSuccess &&
            filteredData.map((item, index) => (
              <Link key={index} to={`/u/chat/${item._id}`} className='hover:text-green-950' >
                <div className="w-full p-2 flex items-center justify-between hover:bg-gray-200 rounded-lg transition duration-200">
                  <div className="flex items-center">
                    <img
                      src="https://i.ytimg.com/vi/ATElufr0OiE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJuaATtZxg3dXNAyUiTBM-dVbiOA"
                      alt="profile"
                      className="rounded-full h-12 w-12"
                    />
                    <p className="ml-3 font-bold">{item.name}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-gray-500">{format(new Date(), 'MM-dd-yyyy')}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {id && <Chatbox />}
    </div>
  );
};

export default Message;

import { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { TbMessageFilled } from "react-icons/tb";
import { MdAddCircle } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

 import brandlog from '../../../assets/MainGreen.png';
 import brandandname from '../../../assets/greenLogo.png';
import Message from "../messages/Message";
const menus = [
  { title: "Message", icon: <TbMessageFilled size={25} /> ,url: "chat"},
  { title: "Call", icon: <IoCall size={25} /> ,url: "call"},
  { title: "Status", icon: <MdAddCircle size={25} />,url: "story", gap: true },
  { title: "Friends", icon: <FaUserFriends size={25} />,url: "friends" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const {rout}=useParams();

  console.log(rout)

  return (
  <div className="flex">
    <div
      className={` ${
        open ? "w-40" : "w-20"
      } bg-white h-screen p-5 pt-8 relative duration-300`}
    >
      <BsArrowLeftCircleFill
        size={open ? 25 : 20}
        className={`absolute cursor-pointer -right-5 opacity-70 bottom-20 w-10 ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
        alt="Control"
      />
      <div className="flex gap-x-4 items-center">
        <img
          src={
            open
              ? brandandname
              : brandlog
          }
          className={`cursor-pointer duration-500 ${open && "scale-110"}`}
          alt="Logo"
        />
      </div>

      <ul className="pt-6">
        {menus.map((menu, index) => (
          <Link key={index} to={`/u/${menu.url}`}>
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-200 text-gray-800 text-sm items-center gap-x-4 transition-all duration-300
            ${menu.gap ? "mt-9" : "mt-2"} ${rout === menu.url && "bg-gray-100"}`}
          >
            <span className={`text-xl`}>{menu.icon}</span>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {menu.title}
            </span>
          </li>
          </Link>
        ))}
      </ul>
    </div>

     <div className="h-screen flex-1 w-100 overflow-auto">

        {rout==='chat'?<Message/>:'Not found'}
        
        
     </div>
     </div> );
};

export default Sidebar;

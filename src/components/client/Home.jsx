import { useState } from "react";
import { FaChartBar, FaInbox, FaUser, FaCalendarAlt, FaSearch, FaFolder, FaCog } from "react-icons/fa";

const menus = [
  { title: "Dashboard", icon: <FaChartBar /> },
  { title: "Inbox", icon: <FaInbox /> },
  { title: "Accounts", icon: <FaUser />, gap: true },
  { title: "Schedule", icon: <FaCalendarAlt /> },
  { title: "Search", icon: <FaSearch /> },
  { title: "Analytics", icon: <FaChartBar /> },
  { title: "Files", icon: <FaFolder />, gap: true },
  { title: "Setting", icon: <FaCog /> },
];

const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={` ${open ? "w-72" : "w-20 "} bg-[#FFFFFF] h-screen p-5 pt-8 relative duration-300`}>
      <img
        src="./src/assets/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="./src/assets/logo.png"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
          Designer
        </h1>
      </div>
      <ul className="pt-6">
        {menus.map((menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-700 text-sm items-center gap-x-4 
            ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
          >
            <span className="text-xl">{menu.icon}</span>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

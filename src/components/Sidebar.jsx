import React, { useState } from 'react';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="grid grid-cols-12">
      <div className="fixed left-0 top-0 h-full w-16 p-4 mt-14 flex flex-col gap-8 items-center bg-[#FFFFFF]">
        
        {/* first icon */}
        <div 
          className={`w-auto h-auto group mt-10 ${activeButton === 1 ? 'scale-110 text-black' : 'hover:scale-110 text-gray-500'}`}
          onClick={() => handleButtonClick(1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 transition duration-300 ease-in-out">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        </div>

        {/* second icon */}
        <div 
          className={`w-auto h-auto group ${activeButton === 2 ? 'scale-110 text-black' : 'hover:scale-110 text-gray-500'}`}
          onClick={() => handleButtonClick(2)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 transition duration-300 ease-in-out">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.75c0 8.284 7.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
        </div>

        {/* third icon */}
        <div 
          className={`w-auto h-auto group ${activeButton === 3 ? 'scale-110 text-black' : 'hover:scale-110 text-gray-500'}`}
          onClick={() => handleButtonClick(3)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 transition duration-300 ease-in-out">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
          </svg>
        </div>

        {/* Four icon */}
        <div 
          className={`w-auto h-auto group ${activeButton === 4 ? 'scale-110 text-black' : 'hover:scale-110 text-gray-500'}`}
          onClick={() => handleButtonClick(4)}
        >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 transition duration-300 ease-in-out">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg>

        </div>
        
      </div>
      <div className="col-span-11 ml-16">
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default Sidebar;

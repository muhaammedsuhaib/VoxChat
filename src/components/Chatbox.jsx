import React from "react";

const Chatbox = () => {
  return (
    <>
      {/* <div className="w-full h-full flex items-center justify-center ">
      <img src="/blackbr.png" alt="logo"  width={400}/>
    </div> */}

      <div className="w-full bg-slate-500 ">
        <div className="w-full bg-red-800 p-2">
          <div className="w-full p-2 flex items-center justify-between rounded-lg">
            <div className="flex items-center">
              <img
                src="https://i.ytimg.com/vi/ATElufr0OiE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJuaATtZxg3dXNAyUiTBM-dVbiOA"
                alt="profile Image"
                className="rounded-full h-12 w-12"
              />
              <p className="ml-3 font-bold">Suhaib</p>
            </div>
            <div className="flex items-center">
              <p>03-03-2024</p>
            </div>
          </div>
        </div>

        <div className="w-full h-[50px] bg-red-900 fixed bottom-0"></div>
      </div>
    </>
  );
};

export default Chatbox;

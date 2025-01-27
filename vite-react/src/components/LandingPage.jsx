import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <div className="mr-[1vw] w-[8vw] h-[5.5vw] relative top-[0.5vw] rounded bg-green-500"></div>
                )}
                <h1 className="uppercase text-[7vw] leading-[6vw] tracking-tighter font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-30 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full">
            Start the Project
          </div>
          <div className="w-8 h-8 flex items-center  justify-center rounded-full border-[1px] border-zinc-600">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

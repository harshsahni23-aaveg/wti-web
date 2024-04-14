import React from "react";

function TopBrandImg() {
  return (
    <div>
      <div className="relative mx-auto w-full">
        <div>
          <img
            className="top-0 left-0 w-[100%] h-[10rem] sm:h-48 md:h-80 lg:h-[22rem]"
            src="./images/TopBrandImg.png"
            alt="Top Brand"
          />
        </div>
        <div className="font-roboto">
          <div className="font-bold text-lg absolute md:text-3xl md:top-[3rem] sm:text-xl sm:top-[1.5rem] top-[1rem]  left-[2rem] lg:top-[4rem] md:ml-0 lg:ml-8 text-white">
            Effortless Corporate <br />
            Mobility
          </div>{" "}
          <div className="absolute font-normal text-xs  md:font-normal sm:top-[6rem] md:top-[8rem] md:text-xl text-white top-[4.7rem] left-[2rem] lg:top-[10rem] md:ml-0 lg:ml-8 ">
            {" "}
            Elevate Your Business with our <br />
            Premier Car Rental Services
          </div>
          <div className="absolute top-[13.5rem]  left-[2rem] text-sm -translate-y-24 bg-white text-black font-bold  py-0.8 px-3 sm:rounded-lg md:rounded-xl w-[8rem] h-[1.5rem] sm:top-[15rem] sm:h-[1.5rem] sm:font-semibold sm:mb-16 md:h-[2.5rem] lg:top-[22rem] lg:w-[14rem] md:top-[20rem] md:w-[13rem] md:font-bold md:text-xl md:px-8 md:py-1 rounded-lg md:ml-0 lg:ml-8">
            Request Quote
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBrandImg;

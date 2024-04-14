import React from "react";

function Card() {
  return (
    <div className="my-14 h-auto">
      <div className="mx-auto w-full xl:w-[1200px]">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <Card1 />
          <Card2 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div>
      <div className="shadow-md rounded-xl h-auto md:flex md:items-center ">
        <img
          className="object-cover mx-auto md:ml-[2.5rem] md:mr-[24px] my-4 md:my-0 lg:my-0 md:mx-0 lg:mx-8 w-[140px] h-auto lg:left-4 "
          src="./images/Card1.png"
          alt="Car Icon"
        />
        <div className="text-center md:text-left px-4 py-2 md:px-4 h-auto">
          <div className="sm:text-red-600 md:text-blue-600 lg:text-black text-lg md:text-[20px] lg:text-[22px] font-semibold my-2 md:my-2 lg:my-2 lg:leading-8">
            Clean Cars, Flexible bookings, socially distant rental counters
          </div>
          <div className="text-[#7A7A7A] text-[16px]">
            We’re working with our partners to keep you safe and in the driving
            seat.
          </div>
        </div>
      </div>
    </div>
  );
}
function Card2() {
  function onSignMeUp(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <div className="shadow-md rounded-xl h-auto md:flex md:items-center">
      <img
        className="object-cover mx-auto md:ml-[2.5rem] md:mr-[24px] my-4 md:my-0 lg:ml-8 lg:my-0 w-[140px] lg:h-[150px] lg:w-[162px] h-[140px]"
        src="./images/Card2.png"
        alt="Inbox Icon"
      />
      <div className="text-center md:text-left px-4 lg:px-[1rem] md:h-auto  lg:h-auto py-2">
        <div className="text-lg md:text-[20px] font-semibold my-2 md:pr-6 md:leading-7 lg:leading-8  lg:text-[22px]">
          Subscribe for exclusive offers and deals!
        </div>
        <div className="flex justify-center md:justify-start sm:w-auto h-8">
          <input
            type="text"
            id="email"
            className="px-2.5 lg:w-[220px] w-[250px] text-sm text-gray-900 bg-transparent rounded-l-xl md:rounded-l-xl border-2 border-[1px_solid_#D2D2D2] placeholder-[#7A7A7A] md:rounded-none md:border-l-2 md:border-t md:border-b-2 md:border-r-2 lg:border-l-2 lg:rounded-l-xl"
            placeholder="Email address"
          />
          <button
            type="button"
            className="bg-[#0F0A34] hover:bg-[#0F0A34] text-white text-[16px] md:text-[12px] lg:text-[16px] font-normal px-4 rounded-r-xl items-center"
            onClick={onSignMeUp}
          >
            Sign me up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";

function Card() {
  return (
    <div className="my-14 h-auto md:h-[210px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:mx-14 lg:mx-20">
        <Card1 />
        <Card2 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="shadow-md rounded-xl h-auto md:h-[208px] md:flex md:items-center">
      <img
        className="object-cover mx-auto my-4 md:my-0 lg:my-0 md:mx-0 lg:mx-8 w-[140px] md:w-[120px] md:h-[120px] lg:h-[130px] lg:w-[162px] h-[140px] lg:left-4 "
        src="./images/Card1.png"
        alt="Car Icon"
      />
      <div className="text-center md:text-left px-4 py-2 md:px-8 md:h-auto lg:h-auto flex-grow md:flex-none md:w-[310px] lg:w-[450px]">
        <div className="text-base md:text-[18px] lg:text-[26px] font-semibold my-2 md:my-2 lg:my-2 lg:leading-10">
          Clean Cars, Flexible bookings, <br /> socially distant rental counters
        </div>
        <div className="text-[#7A7A7A] text-[16px] md:text-[12px] lg:text-[16px]">
          We’re working with our partners to keep you <br /> safe and in the
          driving seat.
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
    <div className="shadow-md rounded-xl h-auto md:h-[208px]  md:flex md:items-center">
      <img
        className="object-cover mx-auto my-4 md:my-0 lg:my-0 w-[140px] md:w-[120px] md:h-[120px] lg:h-[150px] lg:w-[162px] h-[140px] md:flex-none"
        src="./images/Card2.png"
        alt="Inbox Icon"
      />
      <div className="text-center md:text-left px-4 md:px-4 lg:px-8 md:h-auto  lg:h-auto md:flex-none">
        <div className="text-base md:text-[18px] lg:text-[26px] font-semibold my-2 md:pr-6 md:leading-7 lg:leading-10">
          Subscribe for exclusive offers <br /> and deals!
        </div>
        <div className="flex justify-center md:justify-start py-2 lg:py-2">
          <input
            type="text"
            id="email"
            className="px-2.5 lg:w-[220px] w-[250px] md:w-[160px] text-sm text-gray-900 bg-transparent rounded-l-xl md:rounded-l-xl border-2 border-[1px_solid_#D2D2D2] placeholder-[#7A7A7A] md:rounded-none md:border-l-2 md:border-t md:border-b-2 md:border-[1px_solid_#D2D2D2] md:border-r-2 md:placeholder-[#7A7A7A] lg:border-l-2 lg:rounded-l-xl"
            placeholder="Email address"
          />
          <button
            type="button"
            className="bg-[#0F0A34] hover:bg-[#0F0A34] text-white text-[16px] md:text-[12px] lg:text-[16px] font-normal py-2 px-4 rounded-r-xl  md:w-[100px] lg:w-[150px]"
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

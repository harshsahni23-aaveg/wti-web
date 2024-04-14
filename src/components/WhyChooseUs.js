import React from "react";

function WhyChooseUs() {
  return (
    <div className="w-full h-auto md:my-16 my-14 mx-auto xl:w-[1200px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  md:mx-8 lg:mx-8">
        <CarImg />
        <WhyChooseUsText />
      </div>
    </div>
  );
}

function WhyChooseUsText() {
  return (
    <div>
      <div className=" w-full h-auto md:h-auto lg:h-auto md:pl-4  lg:pl-4">
        <div className="md:h-[500px] flex flex-col overflow-hidden sm:pb-6">
          <div className="text-center md:text-left lg:text-left text-[36px] font-semibold text-[#787878]">
            Why Choose us
          </div>
          <div className="text-center md:text-left">
            <div className="text-center md:text-left text-[48px] leading-[50px] font-semibold text-[#4C4CA7] my-2">
              Committing to <br />
              Your Satisfaction <br />
              on Every Ride!
              <br />{" "}
            </div>
            <div className="text-center md:text-left text-[#868686] my-4 text-[20px] font-normal">
              Discover unparalleled reliability and comfort with WTi Cabs where{" "}
              your journey's safety and satisfaction are our foremost
              priorities.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-center md:text-left text-[#616161] w-full h-auto md:h-[148px]">
              <div className="text-4xl font-bold text-[#4C4CA7]">100+ </div>
              <div className="text-[#515151] text-2xl font-semibold my-4">
                Bus Ready{" "}
              </div>
              Sed nunc si consectetur convallis facilisis dictumst nibh.
            </div>
            <div className="text-center md:text-left text-[#616161] w-full h-auto md:h-[148px]">
              <div className="text-4xl font-bold text-[#4C4CA7]">97% </div>
              <div className="text-[#515151] text-2xl font-semibold my-4">
                Customer Satisfaction
              </div>{" "}
              Sed nunc si consectetur convallis facilisis dictumst nibh.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarImg() {
  const carImgArr = [
    {
      img: "./images/CarImg1.png",
      alt: "Neet&Cleen",
    },
    {
      img: "./images/CarImg2.png",
      alt: "Professional Driver",
    },
    {
      img: "./images/CarImg3.png",
      alt: "Punctual",
    },
    {
      img: "./images/CarImg4.png",
      alt: "Support",
    },
  ];
  return (
    <div className="h-auto">
      <div className="md:h-auto w-full">
        <div className="grid grid-cols-2 gap-1 md:gap-0">
          {carImgArr?.map((item, index) => (
            <div key={index} className="flex md:w-[95%]  md:h-[95%]">
              <img
                src={item.img}
                alt={item.alt}
                className="w-[100%] h-[100%]  lg:w-[100%] lg:h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

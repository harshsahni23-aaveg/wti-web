import React from "react";
import SliderSlick, { Slider } from "./SliderSlick";

function CarPriceCard() {
  const carImgArray = "/images-ae/KiaPicanto.png";
  const brandName = "Kia Picanto 1.2L";
  const leaseTime = "1 year lease";
  const price = "AED 1,499";
  const car_size = "Mini";
  const num_of_seats = "5 Seats";
  const passenger = "5 Passenger";
  const doors = "5 Doors";

  return (
    <>
      <div>
        <div className="mx-auto w-full xl:w-[1200px]">
          <div className="flex flex-wrap">
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <div key={index} className="sm:w-6/12 md:w-6/12 lg:w-4/12 p-4 w-full">
                  <div className="car-price-card relative bg-white border rounded-xl shadow-[0px_3px_20px_0px_#00000026]">
                    <div className="absolute bg-[#092C85] top-4 left-0 h-[48px] w-[140px] rounded-tr-[30px] rounded-br-[30px]">
                      <div className="flex justify-center items-center gap-3 h-full ">
                        <span className="text-white ">Verified</span>
                        <img src="/images-ae/check_circle.svg" alt="" />
                      </div>
                    </div>
                    <div className="mb-2 mt-16">
                      <div className="">
                        <img src={carImgArray} alt="" className="mx-auto"/>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col ml-4">
                        <h4 className="font-semibold text-2xl my-2">{brandName}</h4>
                        <div className="flex justify-between">
                          <div>
                            <div className="flex flex-col gap-3 pr-4 pl-0">
                              <div className="flex gap-4">
                                <img src="images-ae/car_icon.svg" alt="" />
                                <span className="font-normal text-base text-[#717171]">{car_size}</span>
                              </div>
                              <div className="flex gap-4">
                                <img src="images-ae/passenger_icon.svg" alt="" />
                                <span className="font-normal text-base text-[#717171]">{num_of_seats}</span>
                              </div>
                            </div>
                          </div>
                          <div className="w-[2px] bg-[#DFDFDF]"></div>
                          <div>
                            <div className="flex flex-col gap-3 px-4">
                              <div className="flex gap-4">
                                <img src="images-ae/safety_seat.svg" alt="" />
                                <span className="font-normal text-base text-[#717171]">{passenger}</span>
                              </div>
                              <div className="flex gap-4">
                                <img src="images-ae/doors.svg" alt="" />
                                <span className="font-normal text-base text-[#717171]">{doors}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fare-and-price ml-4">
                    <div className="border-t-2 border-#D9D9D9 w-[95%] my-3"></div>
                      <div className="my-4">
                        <h2 className="text-[#092C85] text-2xl font-semibold">
                          {price} <span className="text-[#7E7E7E] font-normal text-lg">per month</span>
                        </h2>
                        <span className="text-[#5C5C5C] font-normal text-lg">{leaseTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
        {/* <SliderSlick/> */}
        </div>
      </div>
    </>
  );
}

export default CarPriceCard;

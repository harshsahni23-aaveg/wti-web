import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { ReactComponent as CarDoorIcon } from "./images/icons/car-door.svg";
import { ReactComponent as AirCondIcon } from "./images/icons/air-conditioner.svg";
import { ReactComponent as TransmissionIcon } from "./images/icons/transmission.svg";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchToPayNow } from "../../utils/CarSlices/carDetailSlice";
import { addInsuranceArr } from "../../utils/insuranceSlice";
import { emptyExtraArr } from "../../utils/extraSlice";
import { switchOnLoader } from "../../utils/loaderSlice";
import { switchCarModal } from "../../utils/ModalSlice/modalToggleSlice";
import { switchOffLoader } from "../../utils/loaderSlice";
import { addBaseRate } from "../../utils/invoice/invoiceSlice";
import { switchOnStepThree } from "../../utils/stepperSlice";
import { switchToPayLater } from "../../utils/CarSlices/carDetailSlice";
import { useNavigate } from "react-router-dom";
import { switchOnAddContactModal } from "../../utils/addSlices/addSliceOne";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import { calculateExcessInsurance } from "../../utils/commonFunction/calcExcessInsurance";
import { addExcessInsurance } from "../../utils/invoice/invoiceSlice";
import CallIcon from "@mui/icons-material/Call";
import axios from "axios";

function CarPriceCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pickUpDes = useSelector(
    (store) => store.bookingInfoSlice.pickupLocation
  );
  const addSliceOneSearchStatus = useSelector(
    (store) => store.addSliceOne.searchOnAddPage
  );
  const currencyPrice = useSelector(
    (store) => store.currencySlice.currentCurrRate
  );
  const currencyName = useSelector((store) => store.currencySlice.currentCurr);
  // console.log(props.carDetails);

  const totalDays = useSelector(
    (store) => store.bookingInfoSlice.totalNumberOfDays
  );

  const handlePayNow = (carData) => {
    const excessInsurancePrice = calculateExcessInsurance(
      carData.excessInsuranceCharge,
      totalDays
    );
    dispatch(addExcessInsurance(excessInsurancePrice));
    dispatch(switchToPayNow(carData));
    dispatch(addInsuranceArr(carData.insuranceAndDamageCovers));
    //condition not needed
    // if(!carModalStatus){
    //   dispatch(emptyExtraArr());
    // }
    dispatch(emptyExtraArr());
    dispatch(switchOnLoader());
    // if (carModalStatus) {
    //   dispatch(switchCarModal());
    //   document.documentElement.style.overflow = "visible";
    //   dispatch(switchOffLoader());
    // }
    // .toFixed(2))));
    dispatch(
      addBaseRate(
        parseInt(payNowArray[0]) +
          (parseInt(payNowArray[0]) * payNowPercentageArray[0]) / 100
      )
    );
    // *totalDays);
    dispatch(switchOnStepThree());
    if (pickUpDes == "") {
    } else {
      navigate("/reservation/extras");
    }
  };

  const handlePayLater = (carData) => {
    dispatch(switchToPayLater(carData));
    // if(!carModalStatus){

    // }
    dispatch(emptyExtraArr());

    dispatch(switchOnLoader());
    // if (carModalStatus) {
    //   dispatch(switchCarModal());
    //   document.documentElement.style.overflow = "visible";
    //   dispatch(switchOffLoader());
    // }
    dispatch(
      addBaseRate(
        parseInt(payNowArray[0]) +
          parseInt(payNowArray[0]) * 0.06 +
          (parseInt(payNowArray[0]) * payNowPercentageArray[0]) / 100
      )
    );
    dispatch(switchOnStepThree());
    navigate("/reservation/extras");
  };

  const payNowArray = Object.values(props?.carDetails?.payNowPrice);

  const payNowPercentageArray = Object.values(
    props?.carDetails?.percentageHikePayNow
  );

  const openAddContactModal = () => {
    dispatch(switchOnAddContactModal());
  };


  const getGeoInfo = (type) => {
    console.log("getGeoInfo")
    axios
      .get("https://ipapi.co/json/")
      .then(async (response) => {
        let responseData = response.data;
        let data = JSON.stringify({
          "date": "",
          "location": responseData,
          "fromPage": 2,
          "type": type.toString()
        });
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://www.wticarrental.ae:3000/app/v1/track/tracking',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios.request(config)
        .then(() => {
          console.log("tracking entry");
        })
        .catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const connectOnWhatsApp = (carName) => {
    // return () => {

      // const mobileNumber = "+971 56 909 7524";

      // let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");
      // console.log(number);

      // let url;

      // Appending the phone number to the URL
      // if(window.innerWidth > 640){
      //    url = `https://web.whatsapp.com/send?phone=${number}`;
      //    url += `&text=${encodeURI(`Hello WTi! I would like to enquire about ${carName}`)}&app_absent=0`;
      //    window.open(url);
      // }
      // else{
      //   url = `https://wa.me/${number}`;
      //   url += `?text=${encodeURI(`Hello WTi! I would like to enquire about ${carName}`)}&app_absent=0`;
      //   window.open(url, '_blank');
      // }
      let url = "https://api.whatsapp.com/send?phone=971527687206&text=Hi";
      window.open(url);

      // Appending the message to the URL by encoding it
    // };
  };

  const handleWhatsapp = ()=>{
    let calltype = "whatsapp"
    getGeoInfo(calltype);
    connectOnWhatsApp();
  }

  const connectViaPhone = () => {
    let calltype = "mobile phone"
    getGeoInfo(calltype);

    let phoneNumber = "+971569097524";

    // Construct the tel link
    let telLink = "tel:" + phoneNumber;

    // Open the link to initiate the phone call
    window.open(telLink);
  };

  const connectOnTelegram = (carName) => {
    return () => {
      let url = "https://t.me/WTi_2023";
      window.open(url);
    };
  };

  return (
    <div className="w-full  rounded-md shadow-xl hover:ring-2 py-2 px-4">
      <div className="carName w-full ">
        <span className="text-lg font-semibold leading-6">
          {props.carDetails.title.replace("or similar", "")}
        </span>
      </div>
      <div className="carImage w-full flex justify-center items-center py-6">
        <img
          src={
            "../images/" +
            (props?.carDetails?.imageName
              ? props?.carDetails?.imageName.split(" ").join("")
              : "static") +
            ".png"
          }
          onError={(e) => {
            e.target.src = "../static/staticcarimage.png";
            e.target.style.height = "132px";
          }}
          alt=""
        />
      </div>
      {addSliceOneSearchStatus ? (
        <></>
      ) : (
        <div className="diffCarPrices flex flex-col gap-3">
          {/* <div className="font-semibold text-base flex w-[100%]  justify-between mb-2">
          Daily Price{" "}
          <span className="ml-10 w-[40%] font-medium  text-center  pl-3 max-sm:pl-2">
            {currencyName +
              " " +
              (
                props?.carDetails?.payNowPrice?.daily *
                currencyPrice *
                (props?.carDetails?.percentageHikePayNow?.daily / 100 + 1)
              ).toFixed(2)}
          </span>
        </div> */}

          <div className="font-semibold text-base flex w-[100%]  justify-between ">
            Daily Price{" "}
            <span className="ml-10 w-[40%] text-[#707070] font-normal text-end pl-3 max-sm:pl-2">
              {currencyName +
                " " +
                (
                  props?.carDetails?.payNowPrice?.daily *
                  currencyPrice *
                  (props?.carDetails?.percentageHikePayNow?.daily / 100 + 1)
                ).toFixed(2)}
            </span>
          </div>

          <div className="font-semibold text-base flex w-[100%] justify-between">
            Weekly Price{" "}
            <div className="flex gap-2 items-end relative ">
              {/* <span className="ml-10 w-[40%] font-medium">
              {currencyName +
                " " +
                (
                  props?.carDetails?.payNowPrice?.weekly *
                  currencyPrice *
                  (props?.carDetails?.percentageHikePayNow?.weekly / 100 +
                    1)
                ).toFixed(2)}
            </span>
            <span className="absolute left-14 top-6 font-light text-xs px-2  text-white bg-black rounded-md">
              {"Save " +
                Math.round(
                  100 -
                    (props?.carDetails?.payNowPrice?.weekly *
                      currencyPrice *
                      100) /
                      (props?.carDetails?.payNowPrice?.daily *
                        currencyPrice *
                        7)
                ) +
                "%"}
            </span> */}

              <div className="flex flex-col">
                <span className="block text-[12px] text-center font-normal py-[2px] px-[10px] rounded-[50px] bg-[#e2f7ff] text-[#0089EC]">
                  Save 7%
                </span>
                <span className=" text-[12px] text-[#FF0000] line-through text-end font-normal">
                  1107.4
                </span>
              </div>

              <span className="text-[#707070]  font-normal">598.18 AED</span>
            </div>
          </div>
          <div className="font-semibold text-base flex w-[100%] justify-between mb-8">
            Monthly Price{" "}
            <div className="flex gap-2 items-end relative">
              {/* <span className="ml-10 w-[40%] font-medium">
              {currencyName +
                " " +
                (
                  props?.carDetails?.payNowPrice?.monthly *
                  (props?.carDetails?.percentageHikePayNow?.monthly / 100 +
                    1) *
                  currencyPrice
                ).toFixed(2)}
            </span>
            <span className="absolute left-14 top-6 font-light text-xs px-2  text-white bg-black rounded-md">
              {"Save " +
                Math.round(
                  100 -
                    (props?.carDetails?.payNowPrice?.monthly *
                      currencyPrice *
                      100) /
                      (props?.carDetails?.payNowPrice?.daily *
                        currencyPrice *
                        30)
                ) +
                "%"}
            </span> */}

              <div className="flex flex-col">
                <span className="block text-[12px] font-normal py-[2px] px-[10px] rounded-[50px] text-end bg-[#e2f7ff] text-[#0089EC]">
                  Save 7%
                </span>
                <span className=" text-[12px] text-[#FF0000] line-through text-end font-normal">
                  1107.4
                </span>
              </div>

              <span className="text-[#707070]  font-normal">1567. AED</span>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex justify-between mt-4">
        <div className="flex justify-center items-center">
          <PersonIcon className="text-base text-[#717171] mr-1" />
          <span className=" text-sm text-[#717171]">
            {props?.carDetails?.seats + " Passenger"}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <TransmissionIcon className="text-base text-[#717171] mr-1" />
          <span className="text-sm text-[#717171]">
            {" "}
            {props?.carDetails?.transmissionType.charAt(0).toUpperCase() +
              props?.carDetails?.transmissionType.slice(1)}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <CarDoorIcon className="text-base text-[#717171] mr-1" />
          <span className="text-sm text-[#717171]">
            {" "}
            {props?.carDetails?.doors + " Doors"}
          </span>
        </div>
        {/* <div className='flex  justify-center items-center'>
              <LocalGasStationIcon className="text-base text-[#717171] mr-1" />
                <span className='text-sm text-[#717171]'>Petrol</span>
              </div> */}
      </div>
      {addSliceOneSearchStatus ? (
        <div className="w-full flex justify-evenly mt-4">
          <div className="flex justify-center items-center">
            <AirCondIcon className="text-base text-[#717171] mr-1" />
            <span className=" text-sm text-[#717171]">
              {props?.carDetails?.ac == "yes" ? "Air Condition" : "No A/C"}
            </span>
          </div>
          <div className="flex justify-center items-center">
            <BusinessCenterIcon className="text-base text-[#717171] mr-1" />
            <span className="text-sm text-[#717171]">
              {props?.carDetails?.luggageCapacity + " Suitcases"}
            </span>
          </div>
        </div>
      ) : (
        <></>
      )}
      {addSliceOneSearchStatus ? (
        <div className="w-full py-2 pt-4 flex justify-center items-center">
          {/* <div
              onClick={() => {
                // handlePayLater(props?.carDetails);
                props.handleClick();
              }}
              className="hover:cursor-pointer border border-blue-950 bg-white text-blue-950 px-5 py-2 text-[10px] text-center font-bold rounded max-sm:text-sm"
            >
              Pay Later <br /> {currencyName}
              {" " +
                (
                  (parseInt(payNowArray[0]) +
                    parseInt(payNowArray[0]) * 0.06 +
                    (parseInt(payNowArray[0]) * payNowPercentageArray[0]) /
                      100) *
                  totalDays *
                  currencyPrice
                ).toFixed(2)}
            </div> */}
          {/* <button className='rounded-md bg-[#0F0A34] text-white py-2 px-6 text-sm' onClick={()=>handlePayNow()}>Pay Now $250</button> */}
          <div
            onClick={() => {
              handlePayNow(props?.carDetails);
            }}
            className="bg-blue-950 hover:cursor-pointer max-sm:mt-2 text-white px-5 py-2 text-[10px] font-bold rounded text-center max-sm:text-sm flex items-center justify-between max-sm:block"
          >
            <div className="flex items-center justify-center pr-2 group-hover:scale-[1.05] transition-all delay-1 max-sm:flex">
              Pay Now
            </div>
            <div>
              <div className="text-[11px] max-sm:text-sm">
                {currencyName}
                {" " +
                  (
                    (parseInt(payNowArray[0]) +
                      (parseInt(payNowArray[0]) * payNowPercentageArray[0]) /
                        100) *
                    totalDays *
                    currencyPrice
                  ).toFixed(2)}
              </div>

              <div className="line-through max-sm:mr-0 max-sm:text-[11px]">
                {currencyName}
                {" " +
                  (
                    (parseInt(payNowArray[0]) +
                      (parseInt(payNowArray[0]) * payNowPercentageArray[0]) /
                        100) *
                      totalDays *
                      currencyPrice +
                    (parseInt(payNowArray[0]) +
                      (parseInt(payNowArray[0]) * payNowPercentageArray[0]) /
                        100) *
                      totalDays *
                      currencyPrice *
                      0.15
                  ).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full py-2 pt-4 flex  justify-between items-center ">
          {/* <button className='rounded-md bg-[#0F0A34] text-white py-2 px-6' onClick={openAddContactModal}>Click To Order</button> */}
          <div
            className="rounded-md bg-[#25d365ca] text-white py-2 px-4 flex justify-start items-center cursor-pointer "
            onClick={
              handleWhatsapp
              // props.carDetails.title.replace("or similar", "")
            }
          >
            <WhatsAppIcon />
            <span className="ml-2 text-sm">Enquire Now</span>
          </div>
          <div
            className="rounded-md bg-[#28282B] text-white py-2 px-6 flex justify-start items-center cursor-pointer"
            // onClick={connectOnTelegram(
            //   props.carDetails.title.replace("or similar", "")
            // )}
            onClick={connectViaPhone}
          >
            {/* <TelegramIcon /> */}
            <CallIcon />
            <span className="ml-2 text-sm">Call Now</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarPriceCard;

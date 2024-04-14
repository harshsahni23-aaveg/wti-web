import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import TopBrandImg from "./components/TopBrandImg";
import CarRentalImg from "./components/CarRentalImg";
import DubaiText from "./components/DubaiText";
import WhyChooseUs from "./components/WhyChooseUs";
import Card from "./components/Card";
import CarPriceCard from './components/CarPriceCard';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TopBrandImg />
    <CarRentalImg />
    <DubaiText />
    <WhyChooseUs />
    <Card />
    <CarPriceCard/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

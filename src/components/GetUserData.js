import React from "react";
import { useState } from "react";

import UserName from "./form_inputs/UserName";
import UserPhone from "./form_inputs/UserPhone";
import UserAge from "./form_inputs/UserAge";
import UserGender from "./form_inputs/UserGender";
import SkinConcerns from "./form_inputs/SkinConcerns";
import Cheeks from "./form_inputs/Cheeks";
import BlackSpots from "./form_inputs/BlackSpots";
import SlimLines from "./form_inputs/SlimLines";
import Wrinkles from "./form_inputs/Wrinkles";
import WaterAmount from "./form_inputs/WaterAmount";
import VegetablesAmount from "./form_inputs/VegetablesAmount";
import SleepingHours from "./form_inputs/SleepingHours";
import UsingMakeUp from "./form_inputs/UsingMakeUp";
import DailyPressure from "./form_inputs/DailyPressure";
import GetUserLocation from "./form_inputs/GetUserLocation";
import GetUserPicture from "./form_inputs/GetUserPicture";
import FinalResult from "./form_inputs/resultDisplay/FinalResult";

const GetUserData = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    age: "",
    gender: null,
    skinConcerns: [],
    cheeks: null,
    blackSpots: null,
    slimLines: null,
    wrinkles: null,
    waterAmount: null,
    vegetablesAmount: null,
    sleepingHours: null,
    usingMakeUp: null,
    dailyPressure: null,
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [finalProduct, setFinalProduct] = useState("");

  const API_LINK = "https://api.openweathermap.org/data/2.5";
  const API_KEY = "e69ae94fc40fb0ee7312a34838aa827c";

  const makeRequest = (formData) => {
    console.log(typeof formData, formData);
    let score = 0;
    for (let n of Object.keys(formData)) {
      const val = parseInt(formData[n]);
      if (val && n === "skinConcerns") {
        score += formData[n].length * 5;
      } else if (val && n !== "phone") {
        score += val;
      }

      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        fetch(
          `${API_LINK}/weather/?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=${API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => {
            setFinalProduct("bateekh");
          });
      });

      console.log(n, formData[n], score);
    }
    // console.log(score);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <UserName next={handleNextStep} data={data} />,
    <UserAge next={handleNextStep} prev={handlePrevStep} data={data} />,
    <UserPhone next={handleNextStep} prev={handlePrevStep} data={data} />,
    <UserGender next={handleNextStep} prev={handlePrevStep} data={data} />,
    <SkinConcerns next={handleNextStep} prev={handlePrevStep} data={data} />,
    <Cheeks next={handleNextStep} prev={handlePrevStep} data={data} />,
    <BlackSpots next={handleNextStep} prev={handlePrevStep} data={data} />,
    <SlimLines next={handleNextStep} prev={handlePrevStep} data={data} />,
    <Wrinkles next={handleNextStep} prev={handlePrevStep} data={data} />,
    <WaterAmount next={handleNextStep} prev={handlePrevStep} data={data} />,
    <VegetablesAmount
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
    />,
    <SleepingHours next={handleNextStep} prev={handlePrevStep} data={data} />,
    <UsingMakeUp next={handleNextStep} prev={handlePrevStep} data={data} />,
    <DailyPressure next={handleNextStep} prev={handlePrevStep} data={data} />,
    <GetUserLocation next={handleNextStep} prev={handlePrevStep} data={data} />,
    <GetUserPicture next={handleNextStep} prev={handlePrevStep} data={data} />,
    <FinalResult product={finalProduct} />,
  ];

  // console.log("data", data);

  return (
    <div
      className="d-flex align-items-center justify-content-center flex-column"
      style={{ height: "100vh" }}
    >
      <div
        className="mb-5 mt-2"
        dir="ltr"
        style={{ width: "80%", position: "absolute", top: "1rem" }}
      >
        <p className="mb-1">
          {currentStep} / {steps.length}
        </p>
        <div
          className="progress"
          style={{
            height: "0.5rem",
          }}
        >
          <div
            className="progress-bar bg-prime"
            role="progressbar"
            style={{
              width: `${(currentStep * 100) / steps.length}%`,
            }}
          ></div>
        </div>
      </div>
      {steps[currentStep]}
    </div>
  );
};

export default GetUserData;

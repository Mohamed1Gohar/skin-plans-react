import React from "react";
import { useState, useContext } from "react";
import Logo from "../assets/media/images/logo.png";

import UserContacts from "./form_inputs/UserContacts";
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

import { AppContext } from "../context/GlobalContext";

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

  const { setUserData } = useContext(AppContext);

  const makeRequest = (formData) => {
    let score = 0;
    for (let n of Object.keys(formData)) {
      const val = parseInt(formData[n]);
      if (val && n === "skinConcerns") {
        score -= formData[n].length * 5;
      } else if (val && n !== "phone" && n !== "age") {
        score += val;
      }
    }
    setUserData({
      name: formData.name,
      age: formData.age,
      gender: formData.gender,
      phone: formData.phone,
      grade: score,
      skinType: formData.cheeks,
    });
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
    if (currentStep >= 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const steps = [
    // <SkinConcerns next={handleNextStep} prev={handlePrevStep} data={data} />,
    <Cheeks next={handleNextStep} prev={handlePrevStep} data={data} />,
    // <BlackSpots next={handleNextStep} prev={handlePrevStep} data={data} />,
    // <SlimLines next={handleNextStep} prev={handlePrevStep} data={data} />,
    // <Wrinkles next={handleNextStep} prev={handlePrevStep} data={data} />,
    // <WaterAmount next={handleNextStep} prev={handlePrevStep} data={data} />,
    // <VegetablesAmount
    //   next={handleNextStep}
    //   prev={handlePrevStep}
    //   data={data}
    // />,
    // <SleepingHours next={handleNextStep} prev={handlePrevStep} data={data} />,
    // <UsingMakeUp next={handleNextStep} prev={handlePrevStep} data={data} />,
    // <DailyPressure next={handleNextStep} prev={handlePrevStep} data={data} />,
    // <GetUserLocation next={handleNextStep} prev={handlePrevStep} data={data} />,
    // <GetUserPicture next={handleNextStep} prev={handlePrevStep} data={data} />,
    <UserContacts next={handleNextStep} data={data} />,
  ];

  return (
    <div
      className="d-flex align-items-center flex-column"
      style={{ height: "85vh" }}
    >
      <div
        style={{
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        {/* Header Logo  */}
        <div
          className="d-flex justify-content-center py-2 "
          style={{
            boxShadow: "0 0 20px rgb(0 0 0 / 10%)",
          }}
        >
          <img src={Logo} alt="skin plans" style={{ width: "6rem" }} />
        </div>
        {/* Form progress bar  */}
        <div dir="ltr" style={{ width: "90%", margin: "0 auto" }}>
          <p className="mb-1">
            {currentStep + 1} / {steps.length}
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
                width: `${((currentStep + 1) * 100) / steps.length}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      {steps[currentStep]}
    </div>
  );
};

export default GetUserData;

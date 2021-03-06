import OfferImg from "../../assets/media/images/offer.png";
import { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../../context/GlobalContext";

import { BsCheck } from "react-icons/bs";
import Cookies from "js-cookie";

import OfferForm from "./OfferForm";

const Offer = () => {
  const [hours, setHours] = useState("00");
  const [mins, setMins] = useState("00");
  const [secs, setSecs] = useState("00");

  const { name } = useContext(AppContext);
  const secondsLeft = useRef(null);

  const offerForm = useRef(null);

  useEffect(() => {
    if (Cookies.get("timeLeft") > 0) {
      secondsLeft.current = Cookies.get("timeLeft");
      Cookies.remove("timeLeft");
      secondsLeft.current--;
      Cookies.set("timeLeft", secondsLeft.current);
    } else {
      Cookies.set("timeLeft", 10800);
    }
    setInterval(() => {
      secondsLeft.current = Cookies.get("timeLeft");
      let h = Math.floor(secondsLeft.current / 3600);
      h = h > 9 ? h : `0${h}`;
      setHours(h);
      let m = Math.floor((secondsLeft.current % 3600) / 60);
      m = m > 9 ? m : `0${m}`;
      setMins(m);
      let s = Math.floor((secondsLeft.current % 3600) % 60);
      s = s > 9 ? s : `0${s}`;
      setSecs(s);
      secondsLeft.current--;
      Cookies.set("timeLeft", secondsLeft.current);
      if (secondsLeft.current < 0) {
        Cookies.set("timeLeft", 10800);
      }
    }, 1000);
  }, []);

  const scrollToForm = () => {
    offerForm.current.scrollIntoView();
  };

  return (
    <>
      {/* Counter */}
      <div
        dir="ltr"
        className="text-center w-100 py-2"
        style={{ background: "#e0c916", color: "#000" }}
      >
        متبقي
        <h1
          className=" text-dark mx-auto my-2 rounded-pill"
          style={{ width: "15rem", fontWeight: "700", fontSize: "2rem" }}
        >
          {hours} : {mins} : {secs}
        </h1>
        <strong>
          فقط وينتهي كود الخصم الخاص بك
          <br />
          <button
            onClick={scrollToForm}
            className="btn my-3 text-white px-4 font-weight-bold rounded-pill"
            style={{ fontSize: "1.5rem", background: "#1e8187" }}
          >
            أسرع بالطلب الآن
          </button>
        </strong>
      </div>

      <div
        className="result_comp_style mx-auto"
        style={{
          padding: "0",
          boxShadow: "none",
          maxWidth: "60rem",
        }}
      >
        <img src={OfferImg} alt="عرض خاص" />
        <div
          style={{ background: "#68cbdd", width: "100%", color: "white" }}
          className="text-center px-3"
        >
          <p className="h3">
            عرض خاص لك يا
            <strong style={{ fontSize: "130%", margin: "0 0.85rem" }}>
              {name}
            </strong>
          </p>
          <h2>
            <strong
              style={{
                fontWeight: "900",
                fontSize: "1.5rem",
                lineHeight: "1.5",
              }}
            >
              <span style={{ color: "#015771" }}>لمدة يومان فقط، </span>
              وفري 250 جنيه واكثر <br /> عند طلب العرض الخاص من low-rides
              واستمتعي ب:
            </strong>
          </h2>
          <ul
            className="py-3 text-right w-100 px-2 pr-lg-5"
            style={{ margin: "2rem 0" }}
          >
            <li className="mb-4 border py-2 border-white" style={listStyle}>
              <BsCheck className="bg-prime text-white ml-3" />
              <strong style={{ fontSize: "130%" }}>
                ضمان استرجاع لمدة 30 يوم
              </strong>{" "}
              في حالة إذا كان المنتج به أي مشاكل، أو في حالة عدم ظهور النتائج
              المرغوبة.
            </li>
            <li className="mb-4 border py-2 border-white" style={listStyle}>
              <BsCheck className="bg-prime text-white ml-3" />
              <strong style={{ fontSize: "130%" }}>
                ضمان الأمان عند الاستخدام
              </strong>{" "}
              حيث أن المنتج 100% مكونات طبيعية.
            </li>
            <li className="mb-4 border py-2 border-white" style={listStyle}>
              <BsCheck className="bg-prime text-white ml-3" />
              <strong style={{ fontSize: "130%" }}>شحن مجاني</strong> لأي
              <strong style={{ fontSize: "130%" }}>مكان في مصر</strong>
            </li>
          </ul>
        </div>
        {/* submit a request  */}
        <div ref={offerForm}>
          <OfferForm />
        </div>
      </div>
    </>
  );
};

const listStyle = {
  listStyle: "none",
  paddingRight: "1rem",
};
export default Offer;

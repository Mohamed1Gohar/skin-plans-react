import OfferImg from "../../assets/media/images/offer.png";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/GlobalContext";

import { BsCheck } from "react-icons/bs";
import Cookies from "js-cookie";

import OfferForm from "./OfferForm";

const Offer = () => {
  const [hours, setHours] = useState("00");
  const [mins, setMins] = useState("00");
  const [secs, setSecs] = useState("00");

  const { name } = useContext(AppContext);
  let secondsLeft;

  useEffect(() => {
    Cookies.remove("teimeLeft");
    if (Cookies.get("timeLeft")) {
      secondsLeft = Cookies.get("timeLeft");
    } else {
      secondsLeft = 10800;
      Cookies.set("timeLeft", 10800);
    }
    const timer = setInterval(() => {
      let h = Math.floor(secondsLeft / 3600);
      h = h > 9 ? h : `0${h}`;
      setHours(h);
      let m = Math.floor((secondsLeft % 3600) / 60);
      m = m > 9 ? m : `0${m}`;
      setMins(m);
      let s = Math.floor((secondsLeft % 3600) % 60);
      s = s > 9 ? s : `0${s}`;
      setSecs(s);
      secondsLeft--;
      Cookies.set("timeLeft", secondsLeft);
    }, 1000);

    if (secondsLeft === 0) {
      clearInterval(timer);
      Cookies.remove("timeLeft");
    }
  }, []);

  return (
    <>
      {/* Counter */}
      <div
        dir="ltr"
        className="text-center w-100 py-2"
        style={{ background: "#ffd300" }}
      >
        متبقي
        <h1
          className="bg-danger text-white mx-auto my-2 rounded-pill"
          style={{ width: "15rem", fontWeight: "700" }}
        >
          {hours} : {mins} : {secs}
        </h1>
        فقط وينتهي كود الخصم الخاص بك، اسرع بالطلب الان !
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
        <OfferForm />
      </div>
    </>
  );
};

const listStyle = {
  listStyle: "none",
  paddingRight: "1rem",
};
export default Offer;

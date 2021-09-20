import Nav from "./Nav";
import Head from "../assets/media/images/header.png";
import SetRoutineBtn from "./SetRoutineBtn";

import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { BsFillCaretLeftFill } from "react-icons/bs";

const Header = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["بشرتك", "جمالك"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header style={HeaderStyle}>
      <Nav />
      <div className="container text-right">
        <div className="row">
          <div className="col-lg-6 py-5 mt-3">
            <h1
              className="h1 pb-4 cl-prime heading"
              style={{ lineHeight: "1.4", color: "#363873" }}
            >
              <strong>
                روتين مصمم خصيصاً
                <br /> لـ &nbsp;
                <span ref={el} style={{ color: "#6101ff" }}></span>
              </strong>
            </h1>
            <p className="mb-5">
              بسبب اختلاف نوع البشرة من شخص لآخر، دكاترة الجلدية بتنصح دايما
              بعدم استخدام منتجات بشرة بشكل عشوائي لمجرد انها فعالة على الآخرين.
              لذلك صممنا لك Quiz مجاني يحدد لك نسبة العناصر التي تحتاج اليها
              بشرتك للوصول الى النتائج المرغوب فيها بسهولة.
            </p>
            <div style={{ maxWidth: "30rem" }} className="w-100 m-md-auto">
              <div
                className="w-100 "
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 3.7rem",
                  gridGap: "1rem",
                }}
              >
                <span
                  className="bg-prime text-white text-center rounded-pill"
                  style={{ fontSize: "18px" }}
                >
                  <NavLink
                    to="/assessment"
                    exact
                    className="text-white d-block w-100 h-100 p-3 rounded-pill"
                  >
                    اكتشف روتينك المناسب
                  </NavLink>
                </span>
                <span className="bg-prime text-white text-center rounded-pill">
                  <NavLink
                    to="/assessment"
                    exact
                    className="text-white d-block w-100 h-100 p-3 rounded-pill"
                  >
                    <BsFillCaretLeftFill style={{ fontSize: "1.5rem" }} />
                  </NavLink>
                </span>
              </div>

              {/* </NavLink> */}
              <p className=" my-4 cl-prime" style={{ lineHeight: "1.4" }}>
                مجاني يستغرق دقيقتين فقط ليرشح لك الروتين الامثل لك.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={Head} alt="girl thanking us for helping her" />
          </div>
        </div>
      </div>
    </header>
  );
};
const HeaderStyle = {
  position: "relative",
  background: "#F8F8F8",
};
export default Header;

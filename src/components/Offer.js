import OfferImg from "../assets/media/images/offer.png";
import { useContext } from "react";
import { AppContext } from "../context/GlobalContext";

import { BsCheck } from "react-icons/bs";

const Offer = () => {
  const { name } = useContext(AppContext);

  return (
    <div
      className="result_comp_style mb-4"
      style={{ padding: "0", boxShadow: "none" }}
    >
      <img src={OfferImg} alt="عرض خاص" />

      <div style={{ background: "#68cbdd", width: "100%", color: "white" }}>
        <p className="h3">
          عرض خاص لك يا
          <strong style={{ fontSize: "130%", margin: "0 0.85rem" }}>
            {name}
          </strong>
        </p>
        <h2>
          <strong
            style={{ fontWeight: "900", fontSize: "2rem", lineHeight: "1.5" }}
          >
            <span style={{ color: "#015771" }}>لمدة يومان فقط، </span>
            وفري 250 جنيه واكثر <br /> عند طلب العرض الخاص من low-rides واستمتعي
            ب:
          </strong>
        </h2>
        <ul
          className="py-3 text-right w-100 px-2 pr-lg-5"
          style={{ margin: "2rem 0" }}
        >
          <li className="mb-4" style={listStyle}>
            <BsCheck className="bg-prime text-white ml-3" />
            <strong style={{ fontSize: "130%" }}>
              ضمان استرجاع لمدة 30 يوم
            </strong>{" "}
            في حالة إذا كان المنتج به أي مشاكل، أو في حالة عدم ظهور النتائج
            المرغوبة.
          </li>
          <li className="mb-4" style={listStyle}>
            <BsCheck className="bg-prime text-white ml-3" />
            <strong style={{ fontSize: "130%" }}>
              ضمان الأمان عند الاستخدام
            </strong>{" "}
            حيث أن المنتج 100% مكونات طبيعية.
          </li>
          <li className="mb-4" style={listStyle}>
            <BsCheck className="bg-prime text-white ml-3" />
            <strong style={{ fontSize: "130%" }}>شحن مجاني</strong> لأي
            <strong style={{ fontSize: "130%" }}>مكان في مصر</strong>
          </li>
          {/* {content.map((c, i) => {
          return (
          );
        })} */}
        </ul>
      </div>
    </div>
  );
};

const listStyle = {
  listStyle: "none",
  paddingRight: "1rem",
};
export default Offer;

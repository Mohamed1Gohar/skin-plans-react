import { useContext } from "react";
import { AppContext } from "../../../context/GlobalContext";
import { NavLink } from "react-router-dom";

import { BsCheck } from "react-icons/bs";

const ClaimOffer = () => {
  const { name } = useContext(AppContext);

  return (
    <div className="result_comp_style mb-4">
      <div className="d-flex justify-content-between w-100 mb-2">
        <span>السعر العادي قبل الخصم:</span>
        <del style={{ textDecoration: "line-through" }}>1280 جنيه</del>
      </div>
      <div className="d-flex justify-content-between w-100 mb-2">
        <span>كود خصم skin-plans الخاص بك هو {name}44</span>
      </div>
      <div className="d-flex justify-content-between w-100 border-bottom pb-2 text-right">
        <span>السعر بعد الخصم :</span>
        <span>قم بتطبيق كود الخصم لتعرف نسبة الخصم</span>
      </div>
      <div
        className="my-4"
        style={{ width: "60%", minWidth: "22rem", maxWidth: "35rem" }}
      >
        <h2 className="h4">
          اطلب الآن روتينك المصمم خصيصا لك لتحصل على بشرة نضرة خالية من التجاعيد
          في أقل من 6 أسابيع
        </h2>
        <NavLink
          to="/offer"
          className="text-white rounded-pill submitFormBtn p-3 bg-prime my-3"
        >
          استخدم كود الخصم الخاص بي
        </NavLink>
      </div>
    </div>
  );
};

export default ClaimOffer;

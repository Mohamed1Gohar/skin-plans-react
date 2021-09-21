import { useContext } from "react";
import { AppContext } from "../../../context/GlobalContext";
import { NavLink } from "react-router-dom";

import { BsCheck } from "react-icons/bs";

const ClaimOffer = () => {
  const { name } = useContext(AppContext);

  return (
    <div className="result_comp_style mb-4">
      <div style={{ width: "100%", maxWidth: "35rem" }}>
        <div className="d-flex justify-content-between w-100 mb-2">
          <span>السعر العادي قبل الخصم:</span>
          <del style={{ textDecoration: "line-through", color: "#898787" }}>
            1280 جنيه
          </del>
        </div>
        <div className="d-flex justify-content-between w-100 mb-2">
          <span>
            كود خصم skin-plans الخاص بك هو <strong>{name}44</strong>
          </span>
        </div>
        <div className="d-flex justify-content-between w-100 border-bottom pb-2 text-right">
          <span>السعر بعد الخصم :</span>
          <span style={{ fontSize: "80%" }}>
            قم بتطبيق كود الخصم لتعرف نسبة الخصم
          </span>
        </div>
        <div className="my-4">
          <h2 className="h4">
            <strong>
              اطلب الآن روتينك المصمم خصيصا لك لتحصل على بشرة نضرة خالية من
              التجاعيد في أقل من 6 أسابيع
            </strong>
          </h2>
          <div className="my3">
            <NavLink
              to="/offer"
              className="text-white rounded-pill submitFormBtn p-3 bg-prime my-3"
            >
              استخدم كود الخصم
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimOffer;

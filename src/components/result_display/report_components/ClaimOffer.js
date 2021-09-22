import { useContext } from "react";
import { AppContext } from "../../../context/GlobalContext";
import { NavLink } from "react-router-dom";

const ClaimOffer = () => {
  const { name } = useContext(AppContext);

  return (
    <div className="result_comp_style mb-4 text-center">
      <div style={{ width: "100%", maxWidth: "35rem" }}>
        <div className="w-100 mb-2 d-flex flex-column border-bottom pb-2">
          <strong>السعر العادي قبل الخصم:</strong>
          <del style={{ textDecoration: "line-through", color: "#898787" }}>
            1280 جنيه
          </del>
        </div>

        <div className="w-100 mb-2 border-bottom pb-2">
          <span>
            كود خصم skin-plans الخاص بك هو <br />{" "}
            <strong
              className="px-3 rounded-pill"
              style={{
                background: "#d1cdcd",
                margin: "0.75rem 0 0.5rem",
                display: "inline-block",
              }}
            >
              {name}44
            </strong>
          </span>
        </div>
        <div className="d-flex flex-column w-100 border-bottom pb-2 ">
          <span>السعر بعد الخصم :</span>
          <span style={{ fontSize: "80%", color: "#5f64e2" }}>
            قم بتطبيق كود الخصم لتعرف نسبة الخصم
          </span>
        </div>
        <div className="my-4">
          <h2 className="h4">
            <strong style={{ lineHeight: "1.5" }}>
              اطلب الآن روتينك المصمم خصيصا لك لتحصل على بشرة نضرة خالية من
              التجاعيد في أقل من 6 أسابيع
            </strong>
          </h2>
          <div className="my-3">
            <NavLink
              to="/offer"
              className="text-white rounded-pill  p-3 bg-prime my-3 w-100 h-100 d-inline-block"
              style={{
                fontSize: "1.5rem",
              }}
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

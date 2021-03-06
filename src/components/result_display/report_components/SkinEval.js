import { useContext } from "react";
import Logo from "../../../assets/media/images/logo.png";
import { AppContext } from "../../../context/GlobalContext";

const SkinEval = () => {
  const { displayedGrade } = useContext(AppContext);
  return (
    <div className="result_comp_style mb-md-4 ">
      <p className="h3 " style={{ fontWeight: "900" }}>
        تقييم البشرة هو
      </p>
      <p className="display-3" style={{ fontWeight: "900", color: "#5f64e2" }}>
        {displayedGrade}
      </p>
      <p>
        <img
          src={Logo}
          alt="skin plans"
          style={{
            display: "inline-block",
            width: "6rem",
            marginLeft: "0.5rem",
          }}
        />
        يرشح لك زيادة التقييم إلى 10 باستخدام منتج للتخلص من تجاعيد البشره
        والخطوط الرفيعه ويحفز مرونة البشرة وامتلائها
      </p>
    </div>
  );
};

export default SkinEval;

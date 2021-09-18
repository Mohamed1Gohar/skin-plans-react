import { useContext } from "react";
import { AppContext } from "../../../context/GlobalContext";

const ActAge = () => {
  const { age } = useContext(AppContext);
  return (
    <div className="result_comp_style mb-4" dir="ltr">
      <p className="h4">عمرك الحقيقي</p>
      <p>عمرك الحقيقي: {age}</p>
      <div className="progress w-100 my-2" style={{ height: "1.5rem" }}>
        <div
          className="progress-bar text-right px-2 bg-prime"
          role="progressbar"
          style={{ width: `calc(2rem + ${age}% )` }}
        >
          {age}
        </div>
      </div>
      <p>عمرك بالنسبه لمظهر بشرتك : {age + 7}</p>
      <div className="progress w-100 my-2" style={{ height: "1.5rem" }}>
        <div
          className="progress-bar text-right pr-2 bg-danger"
          role="progressbar"
          style={{ width: `calc(2rem + ${age + 7}% )` }}
        >
          {age + 7}
        </div>
      </div>
    </div>
  );
};

export default ActAge;

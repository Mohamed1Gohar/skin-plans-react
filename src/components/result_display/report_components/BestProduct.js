import { BsCheck } from "react-icons/bs";
import ProductImage from "../../../assets/media/images/product.png";
const BestProduct = () => {
  const content = [
    "يملأ خطوط الوجه.",
    "يمنح البشرة ترطيب ونعومة.",
    "يعزز مرونة البشرة.",
    "محفز للكولاجين.",
    "يساعد في تجديد خلايا البشرة.",
    "آمن على البشرة الحساسة.",
    "يأتيكِ المنتج بضمان استرجاع 30 يوم",
  ];
  return (
    <div className="result_comp_style mb-4">
      <h1 className="h3" style={{ fontWieght: "900" }}>
        المنتج الطبيعي الأنسب لك هو
        <strong>كريم لو رايدز </strong>
      </h1>
      <img src={ProductImage} alt="كريم لو رايدز" />
      <ul className="py-3 text-right w-100">
        {content.map((c, i) => {
          return (
            <li key={i} className="pb-2" style={listStyle}>
              <BsCheck className="bg-prime text-white ml-3" />
              {c}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const listStyle = {
  listStyle: "none",
  paddingRight: "2rem",
};
export default BestProduct;

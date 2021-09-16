import ExpectChangeGraph from "../../../assets/media/images/skin_change.png";
import { BsFillCaretUpFill } from "react-icons/bs";

const ExpectedChanges = () => {
  const changes = [
    {
      name: "نضارة",
      n: "20%",
    },
    {
      name: "امتلاء بشرة",
      n: "25%",
    },
    {
      name: "انتفاخ عين أقل",
      n: "53%",
    },
    {
      name: "خطوط وجه أقل",
      n: "75%",
    },
    {
      name: "بقع داكنة أقل",
      n: "85%",
    },
  ];

  return (
    <div
      className="result_comp_style py-4 mb-4"
      style={{ gridArea: "expectChange" }}
    >
      <p className="h5 my-4">
        التغيرات المتوقعة لبشرتك في حالة استخدام هذا المنتج : (بناءً على نتائج
        عملاء مشابهين)
      </p>
      <div className="gridContainer text-right  expectedChangesContainer align-items-center">
        <img
          src={ExpectChangeGraph}
          alt="نضارة 20% و امتلاء بشرة 25% و انتفاخ عين أقل 53% خطوط وجه أقل 75% بقع داكنة أقل 85%"
        />
        <ul className="h-100 d-flex justify-content-center flex-column px-4">
          {changes.map((c, i) => {
            return (
              <li key={i}>
                <BsFillCaretUpFill />
                {c.name}
                <span style={SpecialTxtStyles}> {c.n}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const SpecialTxtStyles = {
  fontWeight: "700",
  margin: "0 0.5rem",
  color: "#5f64e2",
};

export default ExpectedChanges;

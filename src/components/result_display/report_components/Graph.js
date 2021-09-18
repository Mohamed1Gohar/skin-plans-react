import FullChart from "../../../assets/media/images/fullChart.png";

const Graph = () => {
  return (
    <div className="mt-3">
      <p className="mb-3">
        انت تعاني من
        <br />
      </p>
      <p className="bg-prime text-white rounded p-3">
        نقص في الكولاجين والريتينول بكمية كبيرة!
      </p>

      <div className="mt-4 gridContainer graph mb-4">
        <div className=" result_comp_style">
          <p>بشرتك تحتاج الى معدلات أعلى من الكولاجين وفيتامين أ</p>
        </div>
      </div>
      <div
        className="result_comp_style mb-4 chartContainer"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <img
          src={FullChart}
          style={{ width: "100%", maxWidth: "45rem" }}
          alt="بشرة أكثر نضارة بنسبة 97 % و مشاكل بشرة أقل بكثير كل ذلك مع skin plans"
        />
      </div>
      <div className=" result_comp_style mb-4">
        <p>
          بناءً على نتائجك فسيتم اشباع بشرتك بالعناصر التي تحتاجها بنسبة
          <span style={SpecialTxtStyles}>97%</span>
          <br />
          في خلال
          <span style={SpecialTxtStyles}>6 اسابيع</span> عند استخدام المنتج
          المرشح بالطريقة الموصى بها
        </p>
      </div>
    </div>
  );
};

const SpecialTxtStyles = {
  fontSize: "1.5rem",
  fontWeight: "700",
  margin: "0 0.5rem",
  color: "#5f64e2",
};

export default Graph;

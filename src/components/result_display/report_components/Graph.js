import GraphSource from "../../../assets/media/video/gradient_graphmp.mp4";

const Graph = () => {
  return (
    <div className="mt-5">
      <p className="mb-3">
        انت تعاني من
        <br />
      </p>
      <p className="bg-prime text-white rounded p-3">
        نقص في الكولاجين والريتينول بكمية كبيرة!
      </p>
      <div className="mt-4 gridContainer graph">
        <div className=" result_comp_style">
          <p>بشرتك تحتاج الى معدلات أعلى من الكولاجين وفيتامين أ</p>
        </div>
        <div className=" result_comp_style">
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
      <div className=" result_comp_style">
        <video
          src={GraphSource}
          alt="اإثير اشباع برشرتك بالعناصر اللي تحتاجها"
          autoPlay
          style={{ width: "100%", height: "auto" }}
        />
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

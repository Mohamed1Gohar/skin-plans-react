import FullChart from "../../../assets/media/images/fullChart.png";
// import Chart from "../../../assets/media/svg/chart.png";
// import { ReactComponent as Dashed } from "../../../assets/media/svg/dashed.svg";
// import { ReactComponent as Solid } from "../../../assets/media/svg/solid.svg";

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
        {/* <span className="percent ">97% بشرة أكثر نضارة</span>
        <span className="less ">مشاكل اقل</span>
        <span className="point bg-prime"></span> */}
        <img src={FullChart} className="chartSvg" />
        {/* <img src={Chart} className='chartSvg' />
        <Dashed className="dashedSvg" />
        <Solid className="solidSvg" /> */}
        {/* <video
          src={GraphSource}
          alt="اإثير اشباع برشرتك بالعناصر اللي تحتاجها"
          autoPlay
          style={{ width: "100%", height: "auto" }}
        /> */}
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

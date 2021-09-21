import Graph from "./report_components/Graph";
import SkinEval from "./report_components/SkinEval";
import ActAge from "./report_components/ActAge";
import Percentages from "./report_components/Percentages";
import Info from "./report_components/Info";
import BestProduct from "./report_components/BestProduct";
import SkinMatch from "./report_components/SkinMatch";
import ExpectedChanges from "./report_components/ExpectedChanges";
import ProductComponents from "./report_components/ProductComponents";
import SkinTypeRoutine from "./report_components/SkinTypeRoutine";
import Offer from "./report_components/Offer";
import Disclaimer from "./report_components/Disclaimer";

const FinalReport = () => {
  return (
    <>
      <div className="text-center py-4 container cl-prime resultMaxWidth">
        <Graph />
        <div className="gridContainer secondLineResult ">
          <SkinEval />
          <ActAge />
        </div>
        <SkinMatch />
        <div className="gridContainer forthLinResult">
          <Info />
          <Percentages />
          <ExpectedChanges />
        </div>
        <BestProduct />
        <ProductComponents />
        <SkinTypeRoutine />
        <Offer />
      </div>
      <Disclaimer />
    </>
  );
};

export default FinalReport;

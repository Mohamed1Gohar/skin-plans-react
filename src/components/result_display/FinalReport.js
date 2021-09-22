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
import ClaimOffer from "./report_components/ClaimOffer";
import Disclaimer from "../Disclaimer";

const FinalReport = () => {
  return (
    <>
      <div className="text-center pt-4 container cl-prime resultMaxWidth">
        <Graph />
        <div className="gridContainer secondLineResult ">
          <SkinEval />
          <ActAge />
        </div>
        <SkinMatch />
        <SkinTypeRoutine />
        <div className="gridContainer forthLinResult">
          <Info />
          <Percentages />
          <ExpectedChanges />
        </div>
        <BestProduct />
        <ProductComponents />
        <ClaimOffer />
        <Disclaimer />
      </div>
    </>
  );
};

export default FinalReport;

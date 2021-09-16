import Boysen from "../../../assets/media/images/product_components/boysenberry.png";
import capparis from "../../../assets/media/images/product_components/capparis.png";
import edelweiss from "../../../assets/media/images/product_components/edelweiss.png";
import papaya from "../../../assets/media/images/product_components/papaya.png";
import elshiapanner from "../../../assets/media/images/product_components/elshiapanner.png";
import vitaminE from "../../../assets/media/images/product_components/vitaminE.png";
import provitamin from "../../../assets/media/images/product_components/provitamin.png";
import pentavitin from "../../../assets/media/images/product_components/pentavitin.png";

const ProductComponents = () => {
  const content = [
    { name: "الكولاجين البحري", icon: Boysen },
    { name: "الريتينول الأزرق", icon: edelweiss },
    { name: "فاكهة البابايا", icon: papaya },
    { name: "سبينوزا", icon: capparis },
    { name: "الشيا بانر", icon: elshiapanner },
    { name: "بروفيتامين b5", icon: provitamin },
    { name: "بنتافيتين", icon: pentavitin },
    { name: "فيتامين E", icon: vitaminE },
  ];

  return (
    <div className="result_comp_style mb-4">
      <p>
        توليفة تحتوي على مكونات مميزة أهمها الكولاجين البحري والريتينول الازرق
        والشيا باتر و الفيتامينات
      </p>
      <p className="h5">8 مكونات أساسية في المنتج : </p>
      <ul className="py-3 text-right w-100" style={gridListStyle}>
        {content.map((c, i) => {
          return (
            <li key={i} className="pb-2" style={listStyle}>
              <img src={c.icon} alt={c.name} style={iconStyle} />
              {c.name}
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
const gridListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax( 15rem ,1fr))",
  gridGap: "0.5rem",
};
const iconStyle = {
  width: "1.5rem",
  height: "1.5rem",
  marginLeft: ".75rem",
};
export default ProductComponents;

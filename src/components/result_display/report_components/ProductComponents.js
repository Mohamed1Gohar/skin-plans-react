import Boysen from "../../../assets/media/images/product_components/boysenberry-min.png";
import capparis from "../../../assets/media/images/product_components/capparis-min.png";
import edelweiss from "../../../assets/media/images/product_components/edelweiss-min.png";
import papaya from "../../../assets/media/images/product_components/papaya-min.png";
import spider from "../../../assets/media/images/product_components/spider-min.png";

const ProductComponents = () => {
  const content = [
    { name: "الكولاجين البحري", icon: Boysen },
    { name: "الريتينول الأزرق", icon: edelweiss },
    { name: "فاكهة البابايا", icon: papaya },
    { name: "سبينوزا", icon: capparis },
    { name: "الشيا بانر", icon: spider },
    { name: "بروفيتامين b5", icon: spider },
    { name: "بنتافيتين", icon: spider },
    { name: "فيتامين E", icon: spider },
  ];

  return (
    <div className="result_comp_style">
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
const iconStyle= {
  width:"1.5rem",
  height:"1.5rem",
  marginLeft:".75rem"
}
export default ProductComponents;

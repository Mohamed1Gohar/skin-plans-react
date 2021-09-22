import Price from "../../assets/media/images/product.png";
import { useContext } from "react";
import { AppContext } from "../../context/GlobalContext";
import { useInputValue } from "../custom_hooks/useInputHook";

const OfferForm = () => {
  const name = useInputValue(""),
    phone = useInputValue(""),
    address = useInputValue("");

  const { setOfferData } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOfferData({
      offerData: {
        name: name.value,
        phone: phone.value,
        address: address.value,
      },
    });
  };
  return (
    <div
      className="d-flex align-items-center flex-column p-4"
      style={{ background: "#f4f2f3", width: "100%" }}
    >
      {/* images  */}
      <div
        className="my-3 pb-3 text-center bg-white"
        style={{
          maxWidth: "40rem",
          border: "2px solid #2a95a4",
        }}
      >
        <div>
          <img
            src={Price}
            alt="عبوة  واحدة ب 550 جنيه بدل 800 جنيه يعني هتوفري 250 جنيه "
          />
        </div>
        <p className="d-flex align-items-center justify-content-center">
          <span
            style={{
              fontSize: "3rem",
              fontWeight: "900",
              color: "#2a95a4",
              paddingLeft: "0.5rem",
            }}
          >
            550 ج
          </span>
          <span
            className="text-secondary"
            style={{ display: "inline-block", width: "4rem" }}
          >
            {" "}
            بدلا من 800 جنيه
          </span>
        </p>
        <p
          className="my-1"
          style={{ color: "#2a95a4", fontWeight: "bolder", fontSize: "1.5rem" }}
        >
          لسعر العبوة الواحدة
        </p>
        <p
          className="my-2"
          style={{ color: "#20da20", fontWeight: "bolder", fontSize: "1.5rem" }}
        >
          هتوفري 250 جنيه
        </p>
        <p
          className="py-2 "
          style={{
            backgroundColor: "#2a95a4",
            color: "white",
            fontWeight: "bolder",
            fontSize: "1.5rem",
            padding: "1rem 0",
          }}
        >
          اشتري الآن
        </p>
        <p
          style={{ color: "#2a95a4", fontWeight: "bolder", fontSize: "1.5rem" }}
        >
          الشحن مجاني
        </p>
      </div>
      <div className="w-100" style={{ maxWidth: "40rem" }}>
        <form
          className="mx-auto w-100"
          style={{ maxWidth: "40rem" }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="الاسم"
            {...name}
            style={inputStyle}
            minLength="2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="الهاتف"
            {...phone}
            style={inputStyle}
            minLength="11"
            maxLength="14"
          />
          <input
            type="address"
            name="address"
            placeholder="العنوان"
            {...address}
            style={inputStyle}
            minLength="10"
          />

          <button
            type="submit"
            className="w-100 btn text-white"
            style={{ maxWidth: "40rem", background: "#2d93a1", ...inputStyle }}
          >
            اطلب المنتج االآن
          </button>
          <p className="text-center font-weight-bold">
            لو رايدز منتج &nbsp;
            <span className="text-danger">100% طبيعي</span>
            &nbsp; من مكونات طبيعية بالكامل ولا يحتوي على أي كيماويات ضارة،
            <span className="text-danger"> ومرخص ومسجل من وزارة الصحة .</span>
          </p>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "0.5rem",
  fontSize: "1.1rem",
  borderRadius: "1rem",
  marginBottom: "0.5rem",
};

export default OfferForm;

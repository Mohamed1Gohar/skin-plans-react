import Price from "../../assets/media/images/offer_price.png";
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
      className="d-flex align-items-center flex-column"
      style={{ background: "#f4f2f3", width: "100%" }}
    >
      {/* images  */}
      <div style={{ maxWidth: "40rem" }}>
        <div>
          <img
            src={Price}
            alt="عبوة  واحدة ب 550 جنيه بدل 800 جنيه يعني هتوفري 250 جنيه "
          />
        </div>
      </div>
      <div className="w-100" style={{ maxWidth: "40rem" }}>
        <form className="mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="الاسم"
            {...name}
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone"
            placeholder="الهاتف"
            {...phone}
            style={inputStyle}
          />
          <input
            type="address"
            name="address"
            placeholder="العنوان"
            {...address}
            style={inputStyle}
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
            <span className="text-danger"> ومرخص ومسجل من الجهات المختصة.</span>
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

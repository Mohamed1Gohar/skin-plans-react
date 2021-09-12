import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const FormArrows = ({ parentProps, values, condition }) => {
  return (
    <div
      className="d-flex justify-content-between container flex-row"
      style={{ width: "20rem" }}
    >
      <button
        type="submit"
        className="btn text-white my-3 bg-prime"
        style={{ borderRadius: "3rem" }}
        disabled={condition}
      >
        {/* {console.log(condition)} */}
        <BsArrowRightShort style={{ fontSize: "2rem" }} />
      </button>
      <button
        type="button"
        className="btn text-white my-3 bg-prime"
        style={{ borderRadius: "3rem" }}
        onClick={() => {
          parentProps.prev(values);
        }}
      >
        <BsArrowLeftShort style={{ fontSize: "2rem" }} />
      </button>
    </div>
  );
};

export default FormArrows;

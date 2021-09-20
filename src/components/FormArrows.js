import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { AiFillLock, AiOutlineCheck } from "react-icons/ai";

const FormArrows = ({
  parentProps,
  values,
  condition,
  lastStep,
  firstStep,
  handleSubmit,
}) => {
  return (
    <div
      className={`d-flex ${
        !lastStep
          ? "justify-content-between flex-row"
          : "justify-content-center"
      } container formArrowsContainer`}
      style={
        lastStep && {
          width: "100%",
          maxWidth: "35rem",
          left: "unset",
          flexDirection: "column",
        }
      }
    >
      <button
        type="submit"
        className="btn text-white bg-prime border-0 rounded-pill "
        style={{
          width: `${lastStep && "100%"}`,
          padding: `${lastStep ? "0" : "0.5rem"}`,
        }}
        disabled={condition}
      >
        {/* {console.log("conditions : ", condition)} */}
        {lastStep ? (
          <NavLink
            to="/results"
            className="text-white rounded-pill submitFormBtn "
            data-active={!condition && "active"}
            onClick={() => handleSubmit(values)}
          >
            اعرض النتائج الخاصة بي
          </NavLink>
        ) : (
          <BsArrowRightShort style={{ fontSize: "2rem" }} />
        )}
      </button>
      {lastStep && (
        <div className="mt-2" dir="ltr" style={{ fontSize: "0.9rem" }}>
          <p className="mb-1">
            {" "}
            <AiFillLock
              style={{ fontSize: "1.5rem", marginRight: "0.25rem" }}
            />{" "}
            information are 100% secure
          </p>
          {/* <p>
            <AiOutlineCheck style={checkIconStyle} />i understand my information
            is kept 100% confidential and agree to the terms of service and
            privacy policy
          </p> */}
        </div>
      )}
      {!lastStep && !firstStep && (
        <button
          type="button"
          className="btn text-white bg-prime rounded-pill"
          onClick={() => {
            parentProps.prev(values);
          }}
        >
          <BsArrowLeftShort style={{ fontSize: "2rem" }} />
        </button>
      )}
    </div>
  );
};

const checkIconStyle = {
  width: "1.5rem",
  height: "1.5rem",
  fontSize: "1rem",
  fontWeight: "900",
  padding: "0.25rem",
  marginRight: "0.5rem",
  border: "1px solid #8f7f7f",
  color: "#009600",
};
export default FormArrows;

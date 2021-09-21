import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";

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
        <BsArrowRightShort style={{ fontSize: "2rem" }} />
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

export default FormArrows;

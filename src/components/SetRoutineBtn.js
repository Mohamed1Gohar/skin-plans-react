import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { BsFillCaretLeftFill } from "react-icons/bs";

const SetRoutineBtn = ({ text, showArrow }) => {
  return (
    <>
      <NavLink
        to="/assessment"
        className="btn text-white py-2 px-4 bg-prime"
        style={BtnStyle}
      >
        {text}
      </NavLink>
      {showArrow && (
        <NavLink
          to="/assessment"
          className="text-white mr-4 mt-3 bg-prime"
          style={{
            padding: "7px 10px",
            borderRadius: "3rem",
          }}
        >
          <BsFillCaretLeftFill style={{ fontSize: "1.5rem" }} />
        </NavLink>
      )}
    </>
  );
};

const BtnStyle = {
  borderRadius: "3rem",
  width: "15rem",
};

SetRoutineBtn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SetRoutineBtn;

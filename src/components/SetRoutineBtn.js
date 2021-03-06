import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const SetRoutineBtn = ({ text, showArrow }) => {
  return (
    <>
      <NavLink
        to="/assessment"
        className="btn text-white py-2 px-4 bg-prime rounded-pill"
        style={BtnStyle}
      >
        {text}
      </NavLink>
    </>
  );
};

const BtnStyle = {
  width: "15rem",
};

SetRoutineBtn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SetRoutineBtn;

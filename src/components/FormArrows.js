import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import {NavLink} from 'react-router-dom'

const FormArrows = ({ parentProps, values, condition, lastStep }) => {
  return (
    <div
      className="d-flex justify-content-between container flex-row"
      style={{ width: "20rem" }}
    >
      <button
        type="submit"
        className="btn text-white my-3 bg-prime"
        style={{ borderRadius: "3rem", width: `${lastStep && "6rem" }`, padding:`${lastStep && "0"}` }}
        disabled={condition}
      >
        {lastStep ? <NavLink to="/results" className='btn text-white rounded-pill' style={{ width:"100%" , height:"100%"}} >Submit</NavLink> : 
        <BsArrowRightShort style={{ fontSize: "2rem" }} /> }
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

import Logo from "../assets/media/images/logo.png";
import { NavLink } from "react-router-dom";
import SetRoutineBtn from "./SetRoutineBtn";

const Nav = () => {
  return (
    <nav className="navbar ">
      <div className="container flex-column flex-sm-row">
        <div>
          <NavLink className="navbar-brand m-auto" to="/" exact>
            <img
              src={Logo}
              style={{ width: "12rem" }}
              title="Skin Plans"
              alt="skin plans"
            />
          </NavLink>
        </div>

        <div>
          <SetRoutineBtn text={"اكتشفي روتينك المناسب"} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

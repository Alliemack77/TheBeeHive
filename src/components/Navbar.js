import { useState } from "react";
import "../sass/components/navbar.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import Button from "./Button";
const logo = require("../assets/logo.png");

function NavBar({ logged }) {
  const [isToggled, setisToggled] = useState(false);
  const dispatch = useDispatch();

  const logout = () => {
    setisToggled(false);
    localStorage.removeItem("login");
    dispatch({
      type: "LOGOUT",
    });
  };

  let btns;
  if (logged) {
    btns = (
      <li className="nav__item nav__btns">
        <Link to="/login" onClick={() => logout()}>
          <Button text="Logout" />
        </Link>
      </li>
    );
  } else {
    btns = (
      <li className="nav__item nav__btns">
        <Link to="/login" onClick={() => setisToggled(false)}>
          <Button text="Login" />
        </Link>
        <Link to="/register" onClick={() => setisToggled(false)}>
          <Button text="Register" />
        </Link>
      </li>
    );
  }

  return (
    <div className={`nav-container ${isToggled ? "nav-open" : ""}`}>
      <Link className="nav__link logo" to="/">
        <img src={logo.default} alt="the beehive logo, in the form of a honeycomb"></img>
        <h5>BeeHive</h5>
      </Link>

      <div>
        <button
          className="nav-toggle"
          aria-label="toggle-navigation"
          onClick={() => setisToggled(!isToggled)}
        >
          <span className="hamburger"></span>
        </button>

        <div className="nav">
          <ul className="nav-list">
            <li className="nav__item">
              <a
                className="nav__link"
                href="/"
                onClick={() => setisToggled(false)}
              >
                Home
              </a>
            </li>
      
            <li className="nav__item">
              <Link
                className="nav__link"
                to="/jobs"
                onClick={() => setisToggled(false)}
              >
                Jobs
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to="/mentoring"
                onClick={() => setisToggled(false)}
              >
                Mentoring
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to="/partners"
                onClick={() => setisToggled(false)}
              >
                Partners
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to="/community"
                onClick={() => setisToggled(false)}
              >
                Community
              </Link>
            </li>
            {btns}
          </ul>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    logged: state.login.logged,
  };
}
export default connect(mapStateToProps)(NavBar);

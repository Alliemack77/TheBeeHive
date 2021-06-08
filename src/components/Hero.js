import Button from "./Button";
import { Link } from "react-router-dom";
import "../sass/components/hero.scss";

function Hero({ 
  title, 
  subtitle, 
  image, 
  hasBtns, 
  fontStyle, 
  fontWeight 
  }) {
  const heroImg = require("../assets/" + image + ".jpg");

  let btns;
  if (hasBtns) {
    btns = (
      <>
        <Link to="/register">
          <Button text={"Sign up"} />
        </Link>
        <Link to="/login">
          <Button text={"Login"} color={"outline"} />
        </Link>
      </>
    );
  }
  return (
    <div className="hero">
      <div className="hero__info">
        <div className="hero__info__inner">
          <h1 className={`${fontStyle} ${fontWeight}`}>{title}<span> {subtitle}</span></h1>
          <div className="hero__btns">
            {btns}
          </div>
        </div>
      </div>
      <div className="hero__image">
        <img src={heroImg.default} alt="A diverse team smiling"/>
      </div>
    </div>
  );
}

export default Hero;

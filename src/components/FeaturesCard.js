import Button from "./Button";
import { Link } from "react-router-dom";

import "../sass/components/features-card.scss";
import { BsBraces, BsPeople, BsBriefcase, BsLaptop } from "react-icons/bs";

function FeaturesCard({ title, text, link, symbol }) {
  const icon =
  symbol === "mentoring" ? <BsBraces className="icon"/>
  :symbol === "networking" ? <BsPeople className="icon"/>
  :symbol === "job-search" ? <BsBriefcase className="icon"/>
  :symbol === "online-classes" ? <BsLaptop className="icon"/>:null;
    
  return (
    <div className="feature-card">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
      <Link to={link}>
        <Button text={"Learn more"} />
      </Link>
    </div>
  );
}

export default FeaturesCard;
  
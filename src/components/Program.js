import Button from "./Button";
import { Link } from "react-router-dom";
import "../sass/components/program.scss";

function Program({title, text}) {
  return (
    <div className="program">
      <div className="program__inner">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="program-btns">
          <Link to="/users/mentor">
            <Button text={"Become a mentor"} />
          </Link>
          <Link to="/users/mentee">
            <Button text={"Become a mentee"} color={"outline"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Program;


import Button from "./Button";
import "../sass/components/mission.scss";

function Mission({
  title, 
  text, 
  btnText1, 
  btnText2, 
  link1, 
  link2
  }) {
 
  return (
    <div className="mission">
      <div className="mission__inner">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="mission-btns">
          <a href={link1}>
            <Button text={btnText1} />
          </a>
          <a href={link2}>
            <Button text={btnText2} color={"outline"} />
          </a>
         </div>
      </div>
    </div>
  );
}

export default Mission;

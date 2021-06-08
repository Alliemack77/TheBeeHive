import '../../sass/components/cards/mentor-card.scss';
import { FaGithub, FaLinkedin, FaXing } from 'react-icons/fa'; 
import Button from "../Button";
import { Link } from "react-router-dom";

export default function CardMentor ({ 
    imgName,
    name,
    title, 
    hasSocialMedia 
}) {
    // This code with the images is only for mock data. After connecting with the backend, we need to refactor it!!
    const img = require("../../assets/" + imgName + ".jpg");
    const bgImg = {
      backgroundImage: `url(${img.default})`,
    };
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores excepturi repellendus itaque minus.";
     // until here
  let footer;
    if (hasSocialMedia) {
      footer = (
        <div className="mentor-card__footer">
          <div className="mentor-card__social-media">
            <a href="/#" className="social-media-link">
              <FaLinkedin />
            </a>
            <a href="/#" className="social-media-link">
              <FaGithub />
            </a>
            <a href="/#"  className="social-media-link">
              <FaXing />
            </a>
          </div>
        </div>
      );
    }

  return (
    <div className="mentor-card">
      <div className="mentor-card__header">
        <div className="header-img" style={bgImg}>
            <img src={img.default} alt="a BeeHive mentor"></img>
        </div>
      </div>
      <div className="mentor-card__body">
        <h2 className="body-title">{name}</h2>
        <h3 className="body-subtitle">{title}</h3>
        <p className="body-text">{text} </p>
      </div>
      <div className="mentor-card__social">
        {footer}
      </div>
    </div>
  )
}

  


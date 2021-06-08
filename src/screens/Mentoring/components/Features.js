//import { BsBraces, HiOutlineUserGroup, MdComputer } from "react-icons/bs";
import FeatureCard from "../../../components/FeaturesCard";

import "../../../sass/components/features.scss";

function Features() {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores excepturi repellendus itaque minus.";
    return (
      <div className="features">
        <div className="features__inner">
          <h2>Our Mentorship Programs</h2>
          <div className="feature-cards">
            <FeatureCard
              title="Private Classes"
              text={text}
              link="/mentoring"
              symbol="mentoring"
            />
            <FeatureCard
              title="Group Classes"
              text={text}
              link="/mentoring"
              symbol="networking"
            />
            <FeatureCard
              title="Online Classes"
              text={text}
              link="/mentoring"
              symbol="online-classes"
            />
          </div>
        </div>
  
      </div>
    );
  }
  
  export default Features;
  
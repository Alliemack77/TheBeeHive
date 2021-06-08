import FeatureCard from "../../../components/FeaturesCard";
import "../../../sass/components/features.scss";

function Features() {
  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores excepturi repellendus itaque minus.";
  return (
    <div className="features">
      <div className="features__inner">
        <h2>What we do</h2>
        <div className="feature-cards">
          <FeatureCard
            title="Mentoring"
            text={text}
            link="/mentoring"
            symbol="mentoring"
          />
          <FeatureCard
            title="Networking"
            text={text}
            link="/community"
            symbol="networking"
          />
          <FeatureCard
            title="Job Search"
            text={text}
            link="/jobs"
            symbol="job-search"
          />
        </div>
      </div>

    </div>
  );
}

export default Features;

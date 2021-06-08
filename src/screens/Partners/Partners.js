import Hero from "../../components/Hero";
import '../../sass/pages/_partners.scss';

function Partners() {
  window.scrollTo(0,0); 
  return (
    <div className="partners">
      <div className="partners__content">
        <Hero image="group-meeting" fontStyle="italic" fontWeight="regular" title="New partners page comming soon!" />
        
      </div>
    </div>
  );
}
export default Partners;
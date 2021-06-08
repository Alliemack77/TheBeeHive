import Hero from "../../components/Hero";
import "../../sass/pages/_welcome-message.scss";
function ContactUs() {
  return (
    <div className="mentoring">
      <div className="mentoring__content">
        <Hero image="group-meeting" fontStyle="italic" fontWeight="regular" title="Get in touch with BeeHivee!"/>
                <div className="welcome-message">
                    <h1>BeeHivee GmbH</h1>
                    <p> Berliner Tor straße, 170</p>
                    <p>Hamburg Germany</p>
                    <p> Phone: 0800 456 345</p>
                    <p>email: customerCare@beehive.de</p>
                </div>   
      </div>
    </div>
  );
}
export default ContactUs;
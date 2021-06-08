import Form from '../../../components/Forms/Form-newsletter';
import "../../../sass/components/newsletter.scss";

function Newsletter() {
   return (
    <div className="newsletter">
        <div className="newsletter__card">
            <p>Subscribe to the <span>BeeHive!</span> Our weekly newsletter</p>
        </div>
        <div className="newsletter__signup">
            <Form backgroundColor="bg-grey" inputColor="" btnText="Sign up" btnColor="" type="submit" />
        </div>
    </div>
  );
}

export default Newsletter;

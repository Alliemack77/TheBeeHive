import "../../sass/pages/_login-register.scss";
import FormMentor from '../../components/Forms/Form-mentor';
import{useEffect} from "react";

export default function MentorApplication() {
  useEffect(() => {
    window.scrollTo(0, 0) 
  },[]);
 
  return (
    <div className="login">
      <h1 className="login__header">
        <strong>Apply to be a mentor</strong>
      </h1>
      <p className="regMentor">Use the from below to register for one of mentorship programs.</p>
      <div className="login__form">
        <FormMentor type="submit" backgroundColor="bg-grey" btnText="Submit" btnColor="" />
      </div>
    </div>
  );
}

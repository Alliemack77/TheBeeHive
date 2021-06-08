import "../../sass/pages/_login-register.scss";
import FormMentee from '../../components/Forms/Form-mentee';
import {useEffect} from 'react';
export default function MenteeApplication() {
    useEffect(() => {
      window.scrollTo(0, 0) 
  },[]);
  return (
    <div className="login">
      <h1 className="login__header">
        <strong>Apply to be a mentee</strong>
      </h1>
      <p className="regMentor">Use the from below to register for one of our mentorship programs.</p>
      <div className="login__form">
        <FormMentee  backgroundColor="bg-grey" btnText="Submit" btnColor="" />
      </div>
    </div>
  );
}

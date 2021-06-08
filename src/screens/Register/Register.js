import FormRegister from "../../components/Forms/Form-register";
import { Link } from "react-router-dom";

import "../../sass/pages/_login-register.scss";

export default function Register() {
  return (
    <div className="login">
      <h1 className="login__header">Create your free <span className="bold">BeeHive</span> account</h1>

      <div className="login__body">
        <FormRegister btnText="Register" />
        <div className="login__footer">
          <p>Already a member?</p>
          <Link to="/login" className="login-link bold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

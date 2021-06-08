import FormLogIn from "../../components/Forms/Form-login";
import { Link } from "react-router-dom";
import "../../sass/pages/_login-register.scss";

export default function Login() {
  window.scrollTo(0,0)

  return (
    <div className="login">
      <h1 className="login__header">
        Welcome to the <span className="bold">BeeHive</span>
      </h1>
      
      <div className="login__body">
        <div className="cta">
          <h2 className="thin">Already a member?</h2>
          <p className="bold">Login to continue</p>
        </div>
        <FormLogIn btnText="Login" btnColor=""/>
      </div>
      <div className="login__footer">
        <p>Don't have an account yet?</p>
        <Link to="/register" className="login-link bold">
          Create a free account
        </Link>
      </div>
    </div>
  );
}

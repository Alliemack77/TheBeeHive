// IMPORTS
import { Redirect } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";

// styles and components
import Button from "../Button";
import "../../sass/components/forms.scss";

// api
import * as api from "../../api";

// jwt decoding
import decode from "../../jwtDecode";

// Form and Validation
import { useFormik } from "formik";
import { loginSchema } from "../../validations/loginValidation";

export default function FormLogIn({
  backgroundColor,
  inputColor,
  btnText,
  btnColor,
}) {
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    // Calling the backend
    api
      .login({ ...values })
      // backend response
      .then((data) => {

        const jwt = data.data.token;
        const userData = decode(jwt);

        // Save JWT to local storage
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            token: jwt,
          })
        );

        // Save user data in the redux
        dispatch({
          type: "LOGIN",
          payload: userData,
        });

        // redirect
        setRedirect(true);
      })
      .catch((error) => {
        if (error.response.status && error.response.status === 401) {
          setError("Invalid email and/or password");
        } else {
          setError("Uknown error. Please contact admin.");
        }
      });
  };

  // Validation Function
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: loginSchema,
    validateOnChange: false,
    validateOnBlur: false,
  });
  
  if (redirect) {
    return <Redirect to="/" />;
  } else {
    return (
      <form
        className={`form ${backgroundColor}`}
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className={inputColor}
            id="email"
            name="email"
            type="text"
            placeholder="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          ></input>
          {formik.errors.email ? (
            <div className="red errorMsg">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className={inputColor}
            id="password"
            name="password"
            type="password"
            placeholder="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          ></input>
          {formik.errors.password? (
            <div className="red errorMsg">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="form-group">
          <Button text={btnText} color={btnColor} type="submit" disabled={formik.isSubmitting} />
        </div>
        {formik.errors.channel ? (
          <div className="red errorMsg">{formik.errors.channel}</div>
        ) : null}
        <div className="red errorMsg">{error}</div>
      </form>
    );
  }
}

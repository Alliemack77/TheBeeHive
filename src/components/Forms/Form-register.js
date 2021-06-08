// IMPORTS
import { Redirect } from "react-router";
import { useState } from "react";

// api
import * as api from "../../api";

// styles and components
import Button from "../Button";
import "../../sass/components/forms.scss";

// Form and Validation
import { useFormik } from "formik";
import { userSchema } from "../../validations/userValidation";

export default function FormRegister({
  backgroundColor,
  inputColor,
  btnText,
  btnColor,
}) {
  const [redirect, setRedirect] = useState(false);
  const [emailError, setEmailError] = useState(""); // shows a  message when the email is already registered
  const [serverError, setServerError] = useState(""); // shows a  message when there is a server error

  const onSubmit = (values) => {

    if ((values.userType === "user")) {
      console.log("userTYPE", values.userType)
      addUser(values, "registerUser"); 
    } else {
      console.log("userTYPE", values.userType)
      addUser(values, "registerCompany"); 
    }
  };

  // Formik initial values
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    userType: "",
  };

  // enable formik to handle everything
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: userSchema,
  });

  // add user function
  const addUser = (values, apiRoute) => {
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
      retypedPassword: values.passwordConfirmation,
    };
    // calling the api
    api
      [apiRoute](data)
      // backend response
      .then((response) => {
        setRedirect(true); // redirect to the welcome page
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setEmailError("Email already registered");
        } else {
          setServerError("Unknown error. Please contact admin.");
        }
      });
  }


  // Redirect or render form
  if (redirect) {
    return <Redirect to="/welcomemessage" />;
  } else {
    return (
      <>
        <form
          className={`form ${backgroundColor}`}
          onSubmit={(e) => {
            e.preventDefault();
            setEmailError("");
            setServerError("");
            formik.handleSubmit(e);
          }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className={inputColor}
              id="name"
              name="name"
              type="text"
              placeholder="name"
              onChange={formik.handleChange}
            ></input>
          </div>
          {formik.errors.email ? (
            <div className="red errorMsg">{formik.errors.name}</div>
          ) : null}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className={inputColor}
              id="email"
              name="email"
              type="text"
              placeholder="email"
              onChange={formik.handleChange}
            ></input>
          </div>
          <div className="red errorMsg">{emailError}</div>
          {formik.errors.email ? (
            <div className="red errorMsg">{formik.errors.email}</div>
          ) : null}

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className={inputColor}
              id="password"
              name="password"
              type="password"
              placeholder="password"
              onChange={formik.handleChange}
            ></input>
          </div>
          {formik.errors.email ? (
            <div className="red errorMsg">{formik.errors.password}</div>
          ) : null}

          <div className="form-group">
            <label htmlFor="passwordConfirmation">Confirm Password</label>
            <input
              className={inputColor}
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
              placeholder="confirm password"
              onChange={formik.handleChange}
            ></input>
          </div>
          {formik.errors.passwordConfirmation ? (
            <div className="red errorMsg">
              {formik.errors.passwordConfirmation}
            </div>
          ) : null}

          <div className="form-group">
            <p>Please specify: </p>
            <label className="label" htmlFor="radio-form-individual">
              <input
                className="input-checkbox"
                id="radio-form-individual"
                name="userType"
                type="radio"
                value="user"
                onChange={(e) =>
                  formik.setFieldValue("userType", e.target.value)
                }
              />
              I am an individual
            </label>

            <label className="label" htmlFor="radio-form-company">
              <input
                className="input-checkbox"
                id="radio-form-company"
                name="userType"
                type="radio"
                value="partner"
                onChange={(e) =>
                  formik.setFieldValue("userType", e.target.value)
                }
              />
              I am a corporation
            </label>
            {formik.errors.userType ? (
              <div className="red errorMsg">{formik.errors.userType}</div>
            ) : null}
          </div>
          <div className="red errorMsg">{serverError}</div>

          <div className="form-group">
            <Button
              text={btnText}
              color={btnColor}
              type="submit"
              disabled={formik.isSubmitting}
            />
          </div>
        </form>
      </>
    );
  }
}

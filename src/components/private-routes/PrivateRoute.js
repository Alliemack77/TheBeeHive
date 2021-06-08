import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLogged, isMentor, isPartner } from "../../localstorage";

const PrivateRoute = ({
  PrivateComponent,
  pathComponent,
  userType,
  ...rest
}) => {
    // User info
  const logged = isLogged();
  const partner = isPartner();
  const mentor = isMentor();

  // Authorized is a boolean that is true depending on the userType
  let authorized;
  switch (userType) {
    case "all":
      authorized = logged;
      break;
    case "mentor":
      authorized = logged && mentor;
      break;
    case "partner":
      authorized = logged && partner;
      break;
    default:
      authorized = false;
      break;
  }
  // If the user is authorized, the component is rendered
  // If the user is not authorized:
  // - checks if they are logged in
  // - if they are - redirect to the landing page
  // - if not - redirect to login
  return (
    <Route
    exact path={pathComponent}
    render={()=>
      authorized? (
        <PrivateComponent {...rest} />
      ) : logged ? (
        <Redirect to='/' />
      ) :
      <Redirect to='/login' />
    }
  />
  );
};

export default PrivateRoute;

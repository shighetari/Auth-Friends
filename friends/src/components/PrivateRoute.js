import React from "react";
import { Route, Redirect } from "react-router-dom"; //added Redirect

const PrivateRoute = ({ component: Component, ...rest }) => {
  //get and define users token
  const token = window.localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          //if we have a token return the component
          return <Component {...props} />;
        } else {
          //else redirect the user to /login
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
export default PrivateRoute;

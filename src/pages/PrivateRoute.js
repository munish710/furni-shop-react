import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children, ...routeProps }) => {
  const { myUser } = useUserContext();
  return (
    <Route
      {...routeProps}
      render={() => {
        return myUser ? children : <Redirect to="/" />;
      }}
    />
  );
};
export default PrivateRoute;

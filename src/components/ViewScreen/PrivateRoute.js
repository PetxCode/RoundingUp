import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../StateManagemnet/AuthState";

const PrivateRoute = ({ component: RoutedComponent, ...rest }) => {
  const { activeUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(propsRoute) => {
        return activeUser ? (
          <RoutedComponent {...propsRoute} />
        ) : (
          <Redirect to="/reg" />
        );
      }}
    />
  );
};

export default PrivateRoute;

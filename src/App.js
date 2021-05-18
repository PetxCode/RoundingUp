import React from "react";
import "antd/dist/antd.css";
import Registration from "./components/Registration/Registration";
import HeaderComp from "./components/ViewScreen/HeaderComp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/ViewScreen/HomeScreen";
import DashBoard from "./components/ViewScreen/DashBoard";
import { AuthProvider } from "./components/StateManagemnet/AuthState";
import PrivateRoute from "./components/ViewScreen/PrivateRoute";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <HeaderComp />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <PrivateRoute exact path="/dash" component={DashBoard} />
            <Route exact path="/reg" component={Registration} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;

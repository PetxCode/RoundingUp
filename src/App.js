import React from "react";
import "antd/dist/antd.css";
import LetBuild from "./StudyTime/LetBuild";
import HeaderView from "./StudyTime/HeaderView";
import NewHeader from "./StudyTime/NewHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./StudyTime/About";
import Contact from "./StudyTime/Contact";

const App = () => {
  return (
    <div>
      <Router>
        <HeaderView />
        <Switch>
          <Route path="/" exact component={LetBuild} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

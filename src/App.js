import React from "react";
import "antd/dist/antd.css";
import HomeScreen from "./Styled/HomeScreen/HomeScreen";
import img from "./asset/1.jpg";
import img2 from "./asset/2.jpg";

const App = () => {
  return (
    <div>
      <div>
        <HomeScreen
          headerText="Experiences"
          paraText="Drive API adoption by providing internal and external developers with always up-to-date interactive , tutorials, and code samples."
          button1="Get Started"
          button2="Start Free"
          img={img}
          reverse
        />

        <HomeScreen
          headerText="Scale with Confidence"
          paraText="Whether you work with a couple of APIs and collaborators, or you’re managing a large API program, we’ve made sharing APIs, tracking changes, managing dependencies, and creating style guides a breeze."
          button1="View paln & price"
          button2="click to start"
          img={img2}
        />
      </div>
    </div>
  );
};

export default App;

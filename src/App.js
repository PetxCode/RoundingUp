import React from "react";
import MyBody from "./Files/MyBody";
import MyHeader from "./Files/MyHeader";
import MyFooter from "./Files/MyFooter";
import "antd/dist/antd.css";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <MyHeader />
      <MyBody />
      <MyFooter />
    </div>
  );
};

export default App;

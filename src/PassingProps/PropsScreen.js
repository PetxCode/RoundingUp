import React from "react";
import Symbol from "./Symbol";
import TestProps from "./TestProps";
import img1 from "./Assest/1.png";
import img5 from "./Assest/5.png";
import img3 from "./Assest/3.png";
import img4 from "./Assest/4.png";
import img6 from "./Assest/6.png";
import { RightOutlined } from "@ant-design/icons";
const PropsScreen = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Passing props
      </div>
      <div>
        <TestProps n="32,885,733,962" r="This is the rate" clr="red" />
        <TestProps n="365" r="This is the figure" clr="blue" />
        <TestProps n="36,565" r="Market" />
      </div>
      <br />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Symbol image={img1} text="Mobile App" />
        <Symbol image={img4} text="Mobile App" />
        <Symbol image={img3} text="Mobile App" />
        <Symbol image={img5} text="Mobile App" />
        <Symbol image={img6} text="Mobile App" />
      </div>
    </div>
  );
};

export default PropsScreen;

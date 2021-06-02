import { Button } from "antd";
import React, { useState } from "react";
import SubBody from "./SubBody";

const MyBody = () => {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const sub = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  return (
    <div
      style={{
        height: "80%",
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "tomato",
      }}
    >
      <div
        style={{
          margin: "30px",
          width: "300px",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        This is the Body Page
        <div
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            marginBottom: "20px",
          }}
        >
          {counter}
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <Button
            type="primary"
            onClick={() => {
              add();
            }}
          >
            Increase
          </Button>

          <Button
            style={{
              marginLeft: "10px",
            }}
            type="primary"
            danger
            onClick={() => {
              sub();
            }}
          >
            Decrease
          </Button>
        </div>
        <SubBody />
      </div>
    </div>
  );
};

export default MyBody;

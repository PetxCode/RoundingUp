import React from "react";
import { Button } from "antd";

const PassingClick = ({ press, bgr, text }) => {
  return (
    <div>
      <Button
        style={{
          backgroundColor: bgr,
        }}
        onClick={press}
      >
        {text}
      </Button>
    </div>
  );
};

export default PassingClick;

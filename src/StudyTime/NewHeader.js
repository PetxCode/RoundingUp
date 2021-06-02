import { Header } from "antd/lib/layout/layout";
import React from "react";

const NewHeader = () => {
  return (
    <div>
      <Header
        style={{
          display: "flex",
          backgroundColor: "lightblue",
          justifyContent: "space-around",
          marginBottom: "40px",
        }}
      >
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </Header>
    </div>
  );
};

export default NewHeader;

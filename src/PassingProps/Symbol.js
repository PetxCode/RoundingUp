import React from "react";
import img from "./Assest/1.png";

const Symbol = ({ image, text, icons }) => {
  return (
    <div>
      <div
        style={{
          width: "200px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          style={{
            width: "100px",
            height: "100PX",
            objectFit: "contain",
          }}
        />
      </div>
      <div>{text}</div>
      <div>{icons}</div>
    </div>
  );
};

export default Symbol;

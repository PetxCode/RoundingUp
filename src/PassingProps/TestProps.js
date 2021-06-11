import React from "react";

const TestProps = ({ n, r, clr }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "10px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "25px",
          }}
        >
          {n}
        </div>
        <div
          style={{
            color: clr,
          }}
        >
          {r}
        </div>
      </div>
      
    </div>
  );
};

export default TestProps;

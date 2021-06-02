import React from "react";

const MyHeader = () => {
  return (
    <div
      style={{
        height: "10%",
        backgroundColor: "#021039",
        color: "#fff",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default MyHeader;

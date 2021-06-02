import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";

const HeaderView = () => {
  return (
    <div>
      <Header
        style={{
          backgroundColor: "lightblue",
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "40px",
        }}
      >
        <Link to="/">
          <div>Home</div>
        </Link>

        <Link to="/about">
          <div>About</div>
        </Link>

        <Link to="/contact">
          <div>Contact</div>
        </Link>
      </Header>
    </div>
  );
};

export default HeaderView;

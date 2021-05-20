import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { app } from "../../base";
import { AuthContext } from "../StateManagemnet/AuthState";

const HeaderComp = () => {
  const { activeUser } = useContext(AuthContext);
  return (
    <div>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div>
          <Link
            style={{
              color: "white",
              cursor: "pointer",
            }}
            to="/"
          >
            Home
          </Link>
        </div>

        <div>
          <Link
            style={{
              color: "white",
              cursor: "pointer",
            }}
            to="/dash"
          >
            DashBoard
          </Link>
        </div>

        <div>
          <Link
            style={{
              color: "white",
              cursor: "pointer",
            }}
            to="/post"
          >
            Make a Post
          </Link>
        </div>

        {activeUser ? (
          <Button
            onClick={() => {
              app.auth().signOut();
            }}
          >
            LogOut
          </Button>
        ) : (
          <Link to="/reg">
            <Button>Sign In</Button>
          </Link>
        )}
      </Header>
    </div>
  );
};

export default HeaderComp;

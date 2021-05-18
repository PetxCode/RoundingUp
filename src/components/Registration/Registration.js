import { Button, Input } from "antd";
import React, { useState, useEffect } from "react";
import { app } from "../../base";
import { useHistory } from "react-router-dom";

const userData = app.firestore().collection("user");
const Registration = () => {
  const hist = useHistory();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const SignUp = async () => {
    const userFile = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await userData.doc(userFile.user.uid).set({
      user,
      email,
      password,
      userID: userFile.user.uid,
    });

    hist.push("/");
  };

  const SignIn = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);

    hist.push("/");
  };

  return (
    <div>
      {show ? (
        <div
          style={{
            margin: "50px",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="User Name"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button onClick={SignUp}>Sign Up</Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>Already have an Account</div>
            <div
              style={{
                marginLeft: "5px",
                cursor: "pointer",
                color: "red",
                fontWeight: "bold",
              }}
              onClick={() => {
                toggle();
                console.log(show);
                console.log(email);
              }}
            >
              {" "}
              Sign In here...
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            margin: "50px",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button onClick={SignIn}>Sign In</Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>Don't have an Account</div>
            <div
              style={{
                marginLeft: "5px",
                cursor: "pointer",
                color: "red",
                fontWeight: "bold",
              }}
              onClick={() => {
                toggle();
                console.log(show);
                console.log(email);
              }}
            >
              {" "}
              Sign Up here...
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;

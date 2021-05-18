import { Button } from "antd";
import React, { useState, useEffect } from "react";
import UpdateProfile from "./UpdateProfile";

import { app } from "../../base";

const userData = app.firestore().collection("user");
const DashBoard = () => {
  const [show, setShow] = useState(false);
  const [displayUser, setDisplayUser] = useState([]);
  const toggle = () => {
    setShow(!show);
  };

  const readData = async () => {
    const userCheck = app.auth().currentUser;

    if (userCheck) {
      await userData
        .doc(userCheck.uid)
        .get()
        .then((doc) => {
          setDisplayUser(doc.data());
        });
    }
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <div>
      <div>This is DashBoard Screen</div>
      <div>
        <div>
          <img
            alt="profile Image"
            src={displayUser && displayUser.avatar}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "40px",
              objectFit: "cover",
              backgroundColor: "tomato",
            }}
          />
        </div>
        <div> {displayUser && displayUser.user} </div>
        <div> {displayUser && displayUser.email}</div>
      </div>
      <Button onClick={toggle}>Edit</Button>

      {show ? <UpdateProfile /> : null}
    </div>
  );
};

export default DashBoard;

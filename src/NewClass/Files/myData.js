import { Button, Input } from "antd";
import React, { useState, useEffect } from "react";

const SubBody = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [user, setUser] = useState([]);

  const addUser = () => {
    const newUser = [...user, { name, email }];
    setUser(newUser);
    console.log(user);
  };

  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      Thiis is Sub-Body
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <Input
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button
          type="primary"
          danger
          onClick={() => {
            console.log(name);
            console.log(email);
            addUser();
            setName("");
            setEmail("");
          }}
          style={{
            width: "100%",
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default SubBody;

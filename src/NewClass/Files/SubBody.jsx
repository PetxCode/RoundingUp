import { Button, Input } from "antd";
import React, { useState, useEffect } from "react";
import MyBuild from "./MyBuild";

const SubBody = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState([{ name: "Peter" }, { name: "Bukky" }]);

  const addName = () => {
    const newName = { name };
    setUser([...user, newName]);
    setName("");
  };

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("localStore"));
    if (getData) {
      setUser(getData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("localStore", JSON.stringify(user));
  }, [user]);

  return (
    <div>
      <div>Let's do this</div>
      <div>
        <Input
          placeholder="What's your name?"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button
          type="primary"
          danger
          style={{
            width: "100%",
            marginTop: "5px",
          }}
          onClick={addName}
        >
          Enter
        </Button>
      </div>
      <div
        style={{
          marginTop: "30px",
        }}
      >
        {user.map(({ i, name }) => (
          <div key={i}>
            <div> {name} </div>
          </div>
        ))}
      </div>
      <MyBuild />
    </div>
  );
};

export default SubBody;

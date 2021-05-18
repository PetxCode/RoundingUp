import { Button, Input } from "antd";
import React, { useState, useEffect } from "react";
import { app } from "../../base";

const userData = app.firestore().collection("user");

const UpdateProfile = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);

  const uploadingImage = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setAvatar(await fileRef.getDownloadURL());
  };

  const updateData = async () => {
    const userCheck = app.auth().currentUser;

    if (userCheck) {
      await userData.doc(userCheck.uid).update({
        user,
        email,
        avatar,
      });
    }
  };

  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <div>Update Profile</div>
      <div
        style={{
          width: "300px",
        }}
      >
        <Input type="file" onChange={uploadingImage} />
        <Input
          placeholder="User"
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
        <Button
          onClick={() => {
            updateData();
            // setToggle(false)
          }}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default UpdateProfile;

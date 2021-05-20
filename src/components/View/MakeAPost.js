import { Button, Input } from "antd";
import React, { useState } from "react";
import { app } from "../../base";
import firebase from "firebase";

const postData = app.firestore().collection("donate");

const MakeAPost = () => {
  const [want, setWant] = useState("");
  const [type, setType] = useState("");
  const [cost, setCost] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const uploadingImage = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setImage(await fileRef.getDownloadURL());
  };

  const makeThePost = async () => {
    const user = app.auth().currentUser;

    if (user) {
      await postData.doc().set({
        image,
        want,
        title,
        type,
        cost,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        createdBy: user.uid,
      });
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100hv",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "80px",
        flexDirection: "column",
      }}
    >
      <div>Make A Post</div>

      <br />

      <div
        style={{
          width: "500px",
        }}
      >
        <Input
          type="file"
          onChange={uploadingImage}
          style={{
            margin: "5px",
          }}
        />

        <select
          defaultValue={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
          style={{
            margin: "5px",
          }}
        >
          <option value="school">School</option>
          <option value="house">House</option>
          <option value="transport">Transport</option>
        </select>

        <Input
          placeholder="What would you want"
          value={want}
          onChange={(e) => {
            setWant(e.target.value);
          }}
          style={{
            margin: "5px",
          }}
        />

        <Input
          placeholder="What will it COST"
          value={cost}
          onChange={(e) => {
            setCost(e.target.value);
          }}
          style={{
            margin: "5px",
          }}
        />

        <Input
          placeholder="Title how people should see this"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          style={{
            margin: "5px",
          }}
        />
        <Button
          type="primary"
          danger
          onClick={() => {
            makeThePost();
            // window.location.reload();
          }}
          style={{
            margin: "5px",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          Summit your Request
        </Button>
      </div>
    </div>
  );
};

export default MakeAPost;

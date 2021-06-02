import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { app } from "../../base";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AddProductAction } from "../../Redux/Actions/ProductActions";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const postData = app.firestore().collection("donate");

const MakeAPost = () => {
  const products = useSelector((state) => state.myReducer.Products);
  const dispatch = useDispatch();
  console.log("Data: ", products);

  const [want, setWant] = useState("");
  const [type, setType] = useState("");
  const [cost1, setCost1] = useState("");
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
        cost1,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        createdBy: user.uid,
      });
    }
  };

  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    if (res) {
      console.log(res.data);
      dispatch(AddProductAction(res.data));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          value={cost1}
          onChange={(e) => {
            setCost1(e.target.value);
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
      <div style={{ marginTop: "40px" }}>the Redux:</div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products.map(({ category, title, id, price, description, image }) => (
          <div
            key={id}
            style={{
              width: "300px",
              height: "350px",
              backgroundColor: "lightblue",

              margin: "15px",
              borderRadius: "10px 10px 0 0",
            }}
          >
            <Link to={`/products/${id}`}>
              <img
                src={image}
                alt="img"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px 10px 0 0",
                }}
              />
            </Link>
            <div
              style={{
                paddingLeft: "10px",
              }}
            >
              {" "}
              {title}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MakeAPost;

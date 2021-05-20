import { Button, Input } from "antd";
import React, { useState, useEffect } from "react";
import { app } from "../../base";
import CommentPOst from "./CommentPOst";
import ViewAvatar from "./ViewAvatar";

const donateDB = app.firestore().collection("donate");
const HomeScreen = () => {
  const [postData, setPostData] = useState([]);
  const [comment, setComment] = useState("");

  const getAllPost = async () => {
    await donateDB.limit(3).onSnapshot((snapshot) => {
      const r = [];
      snapshot.forEach((doc) => {
        r.push({ ...doc.data(), id: doc.id });
      });
      setPostData(r);
    });
  };

  useEffect(() => {
    getAllPost();
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
      <div>View all Post</div>
      <div>
        {postData.map(({ cost, createdBy, id, image, title, type, want }) => (
          <div
            key={id}
            style={{
              marginBottom: "30px",
              // backgroundColor: "lightgray",
              height: "380px",
              borderRadius: "10px",
            }}
          >
            <ViewAvatar id={id} createdBy={createdBy} />
            <img
              src={image}
              alt="image"
              style={{
                width: "300px",
                height: "180px",
                borderRadius: "10px 10px 0px 0px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              {" "}
              {title}{" "}
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div style={{ marginLeft: "10px", fontWeight: "bold" }}>
                {" "}
                #{cost}{" "}
              </div>

              <Button>Donate</Button>
            </div>

            <CommentPOst id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;

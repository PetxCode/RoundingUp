import { Button, Input } from "antd";
import React, { useState } from "react";
import { app } from "../../base";

const donateDB = app.firestore().collection("donate");
const CommentPOst = ({ id }) => {
  const [comment, setComment] = useState("");

  const commentPost = async () => {
    const makeComment = app.auth().currentUser;

    if (makeComment) {
      await donateDB.doc(id).collection("comment").doc().set({
        comment,
        commentedBy: makeComment.uid,
      });
    }
  };
  return (
    <div>
      <Input
        placeholder="Make a comment/feedback"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />

      <Button onClick={commentPost}>Comment</Button>
    </div>
  );
};

export default CommentPOst;

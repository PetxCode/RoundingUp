import React, { useState, useEffect } from "react";
import { app } from "../../base";

const userData = app.firestore().collection("user");
const ViewAvatar = ({ createdBy, id }) => {
  const [userInfo, setUserInfo] = useState([]);

  const getUserInfo = async () => {
    const userInfoData = await app.auth().currentUser;

    if (userInfoData) {
      await userData
        .doc(createdBy)
        .get()
        .then((foundUser) => {
          setUserInfo(foundUser.data(0));
        });
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <div>
        {userInfo.avatar ? (
          <img
            src={userInfo && userInfo.avatar}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "30px",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "30px",
              // objectFit: "cover",
              backgroundColor: "lightblue",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            P
          </div>
        )}
        <div>{userInfo && userInfo.user} </div>
      </div>
    </div>
  );
};

export default ViewAvatar;

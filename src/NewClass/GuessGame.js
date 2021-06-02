import { Button, Input } from "antd";
import React, { useState, useEffect } from "react";

const GuessGame = () => {
  const [yourNumb, setYourNumb] = useState("");
  const [correct, setCorrect] = useState("");
  const [myAnswer, setMyAnswer] = useState(0);

  const ans = () => {
    setCorrect(2);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div>Let's build a GUESS GAME</div>

      <Input placeholder="Enter Your Guessed Number" />
      <Button> Guess </Button>

      {correct !== "" ? (
        <div>
          {" "}
          {yourNumb === myAnswer ? (
            <div> That's Right </div>
          ) : (
            <div> Sorry, you're WRONG </div>
          )}{" "}
        </div>
      ) : null}
    </div>
  );
};

export default GuessGame;

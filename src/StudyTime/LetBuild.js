import { Button, Input } from "antd";
import React, { useState } from "react";

const LetBuild = () => {
  const [guessNumb, setGuessNumb] = useState(3);
  const [myAnswer, setMyAnswer] = useState("");
  const [show, setShow] = useState("");

  const showResult = () => {
    setGuessNumb(Math.floor(Math.random() * 10));
    setShow(myAnswer);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          width: "300px",
          backgroundColor: "lightcoral",
          height: "400px",
          borderRadius: "5px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Input
          type="Number"
          placeholder="What's on your Mind?"
          style={{
            width: "200px",
            marginBottom: "10px",
          }}
          value={myAnswer}
          onChange={(e) => {
            setMyAnswer(e.target.value);
          }}
        />
        <div> ( )=> {} </div>
        <Button
          type="primary"
          style={{
            width: "200px",
          }}
          onClick={showResult}
        >
          Enter
        </Button>

        <div>
          {show === "" ? null : (
            <div>
              {guessNumb === parseInt(myAnswer) ? (
                <div> You are RIGHT </div>
              ) : (
                <div> You are WRONG </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LetBuild;

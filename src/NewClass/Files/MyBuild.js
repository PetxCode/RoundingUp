import { Button } from "antd";
import React, { useState, useEffect, useRef } from "react";

const myQuote = [
  "This is ours... only if we can think it!",
  "The earth is the Lord's and the fullth thereof",
  "One with GOD is majority!",
  "The heart of man is so so wicked",
  "There is always light at the end of the Tower!",
];

const myNewQuote = [
  { title: "This is ours... only if we can think it!", name: "Peter" },
  { title: "The earth is the Lord's and the fullth thereof", name: "Judith" },
  { title: "One with GOD is majority!", name: "Lucky" },
  { title: "The heart of man is so so wicked", name: "Stela" },
  { title: "There is always light at the end of the Tower!", name: "GoodLuck" },
];

const myColors = ["red", "black", "blue", "green", "orange", "tomato"];

const MyBuild = () => {
  const clr = useRef();

  const [getQuote, setGetQuote] = useState([]);
  const [moveQuote, setMoveQuote] = useState(0);
  const [count, setCount] = useState(0);

  const handleQuoteChange = () => {
    const onChangeQuote = Math.floor(Math.random() * myNewQuote.length);
    setGetQuote(myNewQuote[onChangeQuote]);
    console.log(onChangeQuote);
    console.log(getQuote);
  };

  const prevQuote = () => {
    if (moveQuote === 0) {
      setMoveQuote(myQuote.length - 1);
    } else {
      setMoveQuote(moveQuote - 1);
    }
  };

  const nextQuote = () => {
    setMoveQuote(moveQuote + 1);
  };

  useEffect(() => {
    setInterval(() => {
      // setCount((sec) => sec + 1);
      setMoveQuote((moveQuote) => moveQuote + 1);
    }, 5000);
  }, []);

  useEffect(() => {
    clr.current.style.color =
      myColors[Math.floor(Math.random() * myNewQuote.length)];
  }, [getQuote]);

  return (
    <div
      style={{
        marginTop: "20px",
        PaddingLeft: "20px",
      }}
    >
      <div>This is my Build</div>
      <div
        style={{
          width: "100%",
          justifyContent: "space-between",
          display: "flex",
          marginTop: "10px",
        }}
      >
        <Button type="primary" danger onClick={prevQuote}>
          Previous
        </Button>
        <div
          style={{
            width: "200px",
            justifyContent: "center",
            display: "flex",
            marginLeft: "10px",
          }}
        >
          {myQuote[moveQuote % myQuote.length]}
        </div>
        <Button type="primary" onClick={nextQuote}>
          Next
        </Button>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "30px",
          marginLeft: "20px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          {myNewQuote[1].title}
          <br />
          <div></div>
          {}

          <div ref={clr}>
            {getQuote === null ? myNewQuote[1].title : getQuote.title}
          </div>
        </div>
        <Button type="primary" danger onClick={handleQuoteChange}>
          Get more Quote
        </Button>
      </div>
      <div>
        <div>{count}</div>
      </div>
    </div>
  );
};

export default MyBuild;

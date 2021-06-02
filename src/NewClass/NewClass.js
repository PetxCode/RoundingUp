import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import ProductCard from "./Container/ProductCard";
import { connect } from "react-redux";
import GuessGame from "./GuessGame";

const NewClass = ({ product }) => {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");

  const [myTeam1, setMyTeam1] = useState([]);
  const [myTeam2, setMyTeam2] = useState([]);

  const add1 = () => {
    setMyTeam1([...myTeam1, team1]);
  };

  const add2 = () => {
    setMyTeam2([...myTeam2, team2]);
  };

  const [counter, setCounter] = useState();

  useEffect(() => {
    setInterval(() => {
      // setCounter((counter) => counter - 1);
      if (counter >= 0) {
        setCounter((item) => item + 1);
      } else if (counter <= 5) {
        setCounter((item) => item - 1);
      }
    }, 1000);
  }, []);

  return (
    <div
    // style={{
    //   display: "flex",
    //   flexWrap: "wrap",
    //   justifyContent: "center",
    // }}
    >
      <div
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Input
          placeholder="Enter team1's Name"
          value={team1}
          onChange={(e) => {
            setTeam1(e.target.value);
          }}
          style={{
            margin: "10px",
          }}
        />

        <Input
          placeholder="Enter team2's Name"
          value={team2}
          onChange={(e) => {
            setTeam2(e.target.value);
          }}
          style={{
            margin: "10px",
          }}
        />

        <Button
          style={{
            margin: "10px",
            width: "300px",
          }}
          onClick={() => {
            add1();
            add2();
          }}
        >
          Enter
        </Button>

        <div
          style={{
            display: "flex",
            margin: "10px",
            flexDirection: "row",
          }}
        >
          <div>This Year This is a Pocket Project done by</div>
          <div
            style={{
              marginLeft: "5px",
              marginRight: "5px",
              fontWeight: "bold",
            }}
          >
            {myTeam1[myTeam1.length - 1]}
          </div>
          <div>and</div>
          <div
            style={{
              marginLeft: "5px",
              marginRight: "5px",
              fontWeight: "bold",
            }}
          >
            {myTeam2[myTeam2.length - 1]}
          </div>
        </div>
        <div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "50px",
              marginLeft: "30px",
            }}
          >
            {counter % 6}
          </div>
        </div>
        <GuessGame />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.shop.products,
  };
};

export default connect(mapStateToProps)(NewClass);

// <div>This is the Product Card Component</div>
// <div
//   style={{
//     marginTop: "60px",
//   }}
// >
//   {product.map((prod) => (
//     <ProductCard key={prod.id} prodData={prod} />
//   ))}
// </div>

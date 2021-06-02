import React from "react";

const ProductCard = ({ prodData }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "lightcoral",
          borderRadius: "5px 5px 0 0",
          marginBottom: "60px",
        }}
      >
        <img
          src={prodData.image}
          alt="img"
          style={{
            width: "300px",
            height: "200px",
            objectFit: "cever",
            borderRadius: "5px 5px 0 0",
          }}
        />
        <div>{prodData.title}</div>
      </div>
    </div>
  );
};

export default ProductCard;

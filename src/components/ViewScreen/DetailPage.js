import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { SelectedProductAction } from "../../Redux/Actions/ProductActions";

const DetailPage = () => {
  const { item_id } = useParams();
  const dispatch = useDispatch();
  let prod = useSelector((r) => r.product);
  const { title, category, image, description, price } = prod;
  console.log("Selected data: ", prod);

  const fetchData = async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${item_id}`);
    if (res) {
      console.log("new Data: ", res.data);
      dispatch(SelectedProductAction(res.data));
    }
  };

  useEffect(() => {
    if (item_id && item_id !== "") {
      fetchData();
    }
    //
  }, [item_id]);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>This is the Item detail Pages!</div>
      <div> {category} </div>
      <div> title: {title} </div>
    </div>
  );
};

export default DetailPage;

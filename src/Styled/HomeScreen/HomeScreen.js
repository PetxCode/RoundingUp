import { Button } from "antd";
import Paragraph from "antd/lib/skeleton/Paragraph";
import React from "react";
import img from "../../asset/1.jpg";
import {
  HeaderText,
  ParagraphText,
  Peter,
  Main,
  ContentHolder,
  ImageHolder,
  ButtonHolder,
  Button1,
  Button2,
} from "./Main.js";

const HomeScreen = ({
  headerText,
  paraText,
  button1,
  button2,
  reverse,
  img,
}) => {
  return (
    <div>
      <Main reverse={reverse}>
        <ContentHolder>
          <HeaderText>{headerText}</HeaderText>
          <ParagraphText>{paraText}</ParagraphText>
          <ButtonHolder>
            <Button1>{button1}</Button1>
            <Button2>{button2}</Button2>
          </ButtonHolder>
        </ContentHolder>
        <ImageHolder>
          <img
            alt="img"
            src={img}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </ImageHolder>
      </Main>
    </div>
  );
};

export default HomeScreen;

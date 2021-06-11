import styled from "styled-components";
import img from "../../asset/1.jpg";

export const Peter = styled.div`
  background-color: white;
  color: ${({ stella }) => (stella ? "tomato" : "black")};
  /* border-color: ${({ stella }) => (stella ? "tomato" : "lightgray")}; */
  border-radius: 3px;
  /* border: none; */
  border: 2px solid ${({ stella }) => (stella ? "tomato" : "lightgray")};
  width: 80px;
  border-width: 2px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: lightblue;
    border: 2px solid lightblue;
  }
`;

export const ButtonHolder = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;
export const Button1 = styled.div`
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  background-color: red;
  align-items: center;
  margin-left: 10px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  background-color: #3bb0e7;
  cursor: pointer;

  &:hover {
    background-color: #0979c2;
  }
`;
export const Button2 = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  background-color: white;
  align-items: center;
  margin-right: 10px;
  border-radius: 5px;
  font-weight: bold;
  border: 1.5px solid black;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: black;
  }
`;

export const ParagraphText = styled.p`
  padding: 10px;
`;

export const HeaderText = styled.h1`
  line-height: 1.2;
  padding: 10px;
`;

export const ImageHolder = styled.div`
  width: 300px;
  height: 200px;
  margin: 10px;
  background-color: tomato;
  border-radius: 5px;
`;

export const ContentHolder = styled.div`
  width: 300px;
  margin: 10px;
  border-radius: 5px;
  background-color: lavender;
  padding-bottom: 10px;

  &:hover {
    /* box-shadow: 0 0 5px 3px rgba(0, 3, 1, 0.2); */
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
`;

export const Game = styled.button`
  width: 100px;
  height: 50px;

  background-color: ${({ primary }) => (primary ? "tomato" : "lightblue")};
`;

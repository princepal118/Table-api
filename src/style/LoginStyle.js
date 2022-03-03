// import { Component } from "react";
import styled from "styled-components";

export const DivContainer = styled.div`
  height: 100vh;
  background-color: brown;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-sizing: border-box; */
`;

export const DivInsider = styled.div`
  border: 3px solid grey;

  height: 265px;
  width: 273px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  /* box-sizing: border-box; */
  border-radius: 22px;
  box-shadow: 4px 6px 18px 11px #888888;
`;

export const Heading = styled.h1`
  color: green;
  margin-top: 15px;
`;

export const Input = styled.input`
  margin: 0px 35px;
  height: 25px;
  align-items: center;

  /* color: rgba(255, 255, 255, 0.62); */

  /* border-radius: 1px; */
`;

export const ButtonSignUp = styled.button`
  border: 2px solid #3b5998;
  margin: 0px 35px 10px;
  height: 30px;
  background: #4267b2;
  color: white;
  font-weight: 500;
  cursor: pointer;
`;

export const CheckboxDiv = styled.div`
  margin-right: 76px;
`;

export const InputCheckbox = styled.input``;

export const Paragraph = styled.span`
  letter-spacing: 0.07px;
  color: lightslategray;
`;

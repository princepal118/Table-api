import React from "react";
import {
  DivInsider,
  DivContainer,
  Heading,
  Input,
  ButtonSignUp,
  CheckboxDiv,
  InputCheckbox,
  Paragraph,
} from "../style/LoginStyle";

import "../App.css";

// ButtonSignUp.addEventListener("click", () => {
//   Input.value = " ";
// });

// const css = {

// }

const Login = () => {
  return (
    <>
      <DivContainer>
        <DivInsider>
          <Heading>Log In </Heading>
          <Input type="text" placeholder="Enter Your Email" />
          <Input type="password" placeholder="Enter Your Password" />
          <CheckboxDiv>
            <InputCheckbox type="checkbox" />
            <Paragraph>REMEMBER ME</Paragraph>
          </CheckboxDiv>
          <ButtonSignUp href="localhost:3000/dash" className="btn-hover">
            Log In
          </ButtonSignUp>
        </DivInsider>
      </DivContainer>
    </>
  );
};
export default Login;

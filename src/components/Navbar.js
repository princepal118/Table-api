import React from "react";
import {
  MainContainer,
  NavLeft,
  NavCenter,
  NavRight,
  Li,
  Input,
  Button,
} from "../style/NavbarStyle";
// import download from "../assets/download.png";
const Navbar = () => {
  return (
    <MainContainer className="hover">
      <NavLeft>REACT</NavLeft>
      <NavCenter>
        <Li>Home</Li>
        <Li>About</Li>
        <Li>Contact Us</Li>
      </NavCenter>
      <NavRight>
        <Input placeholder="search..."></Input>
        <Button>Submit</Button>
      </NavRight>
    </MainContainer>
  );
};

export default Navbar;

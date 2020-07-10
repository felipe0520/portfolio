import React from "react";
import {
  WrapperPresentation,
  Title,
  SubTitle,
  Description,
  Information,
  PhotoMe,
} from "./style";
import SocialNetWork from "../../components/SocialNetWorks/index";

const HomePage = () => {
  return (
    <WrapperPresentation id="sobre-mim">
      <SocialNetWork />
      <Information>
        <Title>Eu sou Felipe Ferraz</Title>
        <SubTitle>Desenvolvedor Web Full Stack</SubTitle>
        <Description>Aprendendo novas tecnologias</Description>
      </Information>
      <PhotoMe src={require("../../image/homePage/Felipe.jpeg")}></PhotoMe>
    </WrapperPresentation>
  );
};

export default HomePage;

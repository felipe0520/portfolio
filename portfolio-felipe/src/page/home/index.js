import React from "react";
import {
  WrapperPresentation,
  FirstDivToGrid,
  SecondDivToGrid,
  Title,
  SubTitle,
  Description,
  Information,
  PhotoMe,
} from "./style";
import SocialNetWork from "../../components/SocialNetWorks/index";

const HomePage = () => {
  return (
    <WrapperPresentation id="home">
      <FirstDivToGrid>
        <SocialNetWork />
        <Information>
          <Title>Eu sou Felipe Ferraz</Title>
          <SubTitle>Desenvolvedor Web Full Stack</SubTitle>
          <Description>Apaixonado por tecnologia e programação</Description>
        </Information>
      </FirstDivToGrid>
      <SecondDivToGrid>
        <PhotoMe src={require("../../image/homePage/Felipe.jpeg")}></PhotoMe>
      </SecondDivToGrid>
    </WrapperPresentation>
  );
};

export default HomePage;

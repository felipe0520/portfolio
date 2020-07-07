import React from "react";
import {
  Wrapper,
  Title,
  WrapperProject,
  ImgProject,
  WrapperCards,
} from "./style";
import CardProject from "../../container/cardProject";

const Projects = () => {
  return (
    <Wrapper id="projetos">
      <Title>Meus Projetos</Title>
      <WrapperProject>
        <WrapperCards>
          <ImgProject src={require("../../image/project/reddit.png")} />

          <CardProject
            title="Whats4"
            subtitle=" Front-end"
            description="Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum."
            nameButton="ver no Github"
          />
        </WrapperCards>
        <WrapperCards>
          <CardProject
            title="Whats4"
            subtitle=" Front-end"
            description="Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum."
            nameButton="ver no Github"
          />
          <ImgProject src={require("../../image/project/4food.png")} />
        </WrapperCards>
        <WrapperCards>
          <ImgProject src={require("../../image/project/reddit.png")} />

          <CardProject
            title="Whats4"
            subtitle=" Front-end"
            description="Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum."
            nameButton="back-en GitHub"
            buttonSecondary
            nameButtonSecondary="front-end GitHub"
          />
        </WrapperCards>
      </WrapperProject>
    </Wrapper>
  );
};

export default Projects;

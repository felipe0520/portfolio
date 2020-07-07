import React from "react";
import { Wrapper, Description, Title } from "./style";
import SocialNetWork from "../../components/SocialNetWorks";

const HireMe = () => {
  return (
    <Wrapper id="contrate-me">
      <Title>Contrate-me</Title>
      <Description>
        Procuro oportunidade de trabalho onde eu possa aprender, me desenvolver
        e evoluir na minha carreia profissional. E-mail para contato:
        email@email.com.br Celular: (xx) xxxxx-xxxx
      </Description>
      <SocialNetWork horizontal />
    </Wrapper>
  );
};

export default HireMe;

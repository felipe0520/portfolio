import React from "react";
import CardInfo from "../../components/cardInfo/";
import { Wrapper, Title, WrapperInfo } from "./style";

export const OQueFaco = () => {
  return (
    <Wrapper>
      <Title>O que faço?</Title>
      <WrapperInfo>
        <CardInfo
          title="Front-end"
          description="Desenvolvimento de aplicações
      web utilizando HTML, CSS e
      JavaScript.
      
      Criação de sites responsivos
      seguindo princípio de
      Mobile First."
        />
        <CardInfo
          title="Back-end"
          description="Aplicações utilizando NodeJS,
        Typescript e MySQL.
        Criação de API´s para
        comunicação com front-end
        seguindo princípio de Clean Code."
        />
      </WrapperInfo>
    </Wrapper>
  );
};

export default OQueFaco;

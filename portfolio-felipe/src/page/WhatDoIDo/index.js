import React from "react";
import CardInfo from "../../components/cardInfo";
import { Wrapper, Title, WrapperInfo } from "./style";

export const WhatDoIDo = () => {
  return (
    <Wrapper>
      <Title>O que faço?</Title>
      <WrapperInfo>
        <CardInfo
          title="Front-end"
          description="Desenvolvimento de aplicações
      web utilizando HTML, CSS, JavaScript, react,redux, redux-thunk,moment, styled-components, material-ui,
      axios, jest.
      "
          descriptionTwo="Criação de sites responsivos e interativos. 
      "
        />
        <CardInfo
          title="Back-end"
          description="Aplicações utilizando NodeJS,
        Typescript, express, uuid,jwt, jest, knex,moment,dotenv bcrypt  e MySQL.
       "
          descriptionTwo="Criação de API´s para
        comunicação com front-end
        seguindo princípio de Clean Code."
        />
      </WrapperInfo>
    </Wrapper>
  );
};

export default WhatDoIDo;

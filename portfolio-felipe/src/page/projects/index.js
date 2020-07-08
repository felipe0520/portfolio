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
            title="4Eddit"
            subtitle=" Front-end"
            description="Implementação  de uma rede social funcional, similar a reddit,
            utilizando react e redux com várias funcionalidades, tais como: criar post, curtir post
            fazer cadastro, login e pesquisa."
            nameButton="ver no Github"
            href="https://github.com/felipe0520/4eddit"
          />
        </WrapperCards>
        <WrapperCards>
          <CardProject
            title="4Food"
            subtitle=" Front-end"
            description="Implementação de uma aplicação web para ambiente mobile, similar a app
            de entrega de comida, utilizando react e redux. Dentre as funcionalidades estão:
            cadastro, login, busca de restaurantes, visualizar carrinho e realizar pedido."
            nameButton="ver no Github"
            href="https://github.com/felipe0520/4food"
          />
          <ImgProject src={require("../../image/project/4food.png")} />
        </WrapperCards>
        <WrapperCards>
          <ImgProject src={require("../../image/project/reddit.png")} />

          <CardProject
            title="Labook"
            subtitle=" Back-end"
            description="Implementação de back-end baseado em rede social, funcional que permita
            interação entre usuários com validações, tokens. Tendo os seguintes endpoints: Cadastro,
            login, fazer amizade, desfazer, criar post, ver o feed. Foi utilizado banco de dados MySQL "
            nameButton="back-en GitHub"
            href="https://github.com/felipe0520/labook"
          />
        </WrapperCards>
      </WrapperProject>
    </Wrapper>
  );
};

export default Projects;

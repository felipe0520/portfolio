import React from "react";
import { WrapperEducation, Title, WrapperCard } from "./style";
import CardEducation from "../../components/cardEducation";

const Education = () => {
  return (
    <WrapperEducation>
      <Title>Educação</Title>
      <WrapperCard>
        <CardEducation
          title="Graduação em ciências biologicas"
          duration="6 anos - 2018"
          description="Graduação em ciências biológicas pela UFMG, na qual tive vivência no âmbito acadêmico
          que proporcionou além de conteúdo relacioado a área da saúde, uma busca pelo conhecimento em geral, 
           respeito as diferenças e ampliação de visão de mundo.  "
        />
        <CardEducation
          title="Curso de Web Full Stack
             na Labenu"
          duration="6 meses - 2020"
          description="Curso com mais de 1000 horas de programação, tendo disciplinas
           tanto no Back-End quanto no Front End.
          Algumas das copetências estudadas: SQL - Javascript - HTML- CSS- Git- Amazon Web Service - Node.js
          - React.js- Github- Typescript- Unit Testing- Firebase- Jest"
        />

        <CardEducation
          title="Cursos livres em informática"
          description="Me dedico sempre a estudar conteúdos relacionados á tecnologia, e também
          buscando consolidar temas já vistos. Como HTML, Javascript, CSS, Lógica de programação e limpeza de código. "
        />
      </WrapperCard>
    </WrapperEducation>
  );
};

export default Education;

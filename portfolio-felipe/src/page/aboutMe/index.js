import React from "react";
import {
  WrapperSobreMim,
  WrapperInfo,
  Photo,
  Description,
  Title,
  WrapperSkils,
  Button,
  NameButton,
  WrapperPhoto,
} from "./style";
import Skil from "../../components/skil";

const SobreMim = () => {
  return (
    <WrapperSobreMim>
      <Photo src={require("../../image/sobreMim/img.svg")} />

      <WrapperInfo>
        <Title>Sobre mim</Title>

        <Description>
          Formado em ciências biológicas pela UFMG no ano de 2018, atuei como
          monitor de zoologia na universidade e também como docente na rede
          pública, lecionei matéria de ciências para ensino fundamental e
          química para a turma de 1 ano do ensino médio. Em 2017 me dediquei na
          gestão de um negócio familiar, a marcenaria São José onde assumi uma
          posição mais estratégica me relacionado com o setor comercial,
          administrativo e produção.Sempre fui inclinado a tecnologia e resolvi
          dar início aos estudos na área após perceber as oportunidades do
          mercado de tecnologia e satisfação em estudar a mesma, foi quando
          entrei na Labenu_ Como acadêmico de Web Full Stack tive contato com
          javascript, react, redux, node. AWS, jest, typescript, github. Sendo a
          conclusão em julho de 2020. Fiz diversos projetos a carácter
          educacional, pondo em práticas conceitos como: MVC, SOLID,
          componentização, e reutilização dos mesmos.
        </Description>
        <WrapperSkils>
          <Skil name="HTML" />
          <Skil name="CSS" />
          <Skil name="JavaScript" />
          <Skil name="TypeScript" />
          <Skil name="React" />
          <Skil name="Node" />
        </WrapperSkils>
        <Button
          type="button"
          target="_blank"
          href="https://drive.google.com/file/d/1gAi8Ia9J9WiQpu_RCaMyeYkJaEi2cjue/view"
          rel="noopener noreferrer"
        >
          <NameButton>CV em PDF </NameButton>
        </Button>
      </WrapperInfo>
    </WrapperSobreMim>
  );
};

export default SobreMim;

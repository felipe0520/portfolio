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
} from "./style";
import Skil from "../../components/skil";

const SobreMim = () => {
  return (
    <WrapperSobreMim>
      <Photo src={require("../../image/sobreMim/SobreMim.jpg")} />
      <WrapperInfo>
        <Title>Sobre mim</Title>

        <Description>
          Formado em ciências biológicas pela UFMG, atuei como docente na rede
          pública, monitor de zoologia na instituição. Também ajudei na gestão
          de um negócio familiar, lá tive contatos com clientes, fornecedores e
          na produção. Amante da tecnologia a bastante tempo, tomei a decisão de
          migrar de área. Atualmente sou estudante web developer na Labenu_ e
          tive contato com javascript, react, redux, node. Fiz diversos projetos
          a carácter educacional, pondo em práticas vários conceitos como: MVC,
          SOLID, componentização, e reutilização dos mesmos.
        </Description>
        <WrapperSkils>
          <Skil name="HTML" />
          <Skil name="CSS" />
          <Skil name="JavaScript" />
          <Skil name="React" />
          <Skil name="Node" />
        </WrapperSkils>
        <Button
          type="button"
          target="_blank"
          href="https://github.com/felipe0520/portfolio/blob/master/portfolio-felipe/curriculo/curriculo-Felipe-Ferraz.pdf"
          rel="noopener noreferrer"
        >
          <NameButton>CV em PDF </NameButton>
        </Button>
      </WrapperInfo>
    </WrapperSobreMim>
  );
};

export default SobreMim;

import React from "react";
import {
  WrapperSobreMim,
  WrapperInfo,
  Photo,
  SubTitle,
  Title,
  WrapperSkils,
  Button,
  NameButton,
} from "./style";
import Skil from "../../components/skil";

const SobreMim = () => {
  return (
    <WrapperSobreMim id="sobre-mim">
      <Photo src={require("../../image/sobreMim/SobreMim.jpg")} />
      <WrapperInfo>
        <Title>Sobre mim</Title>

        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SubTitle>
        <WrapperSkils>
          <Skil name="HTML" />
          <Skil name="CSS" />
          <Skil name="JavaScript" />
          <Skil name="React" />
          <Skil name="Node" />
        </WrapperSkils>
        <Button>
          <NameButton>CV em PDF</NameButton>
        </Button>
      </WrapperInfo>
    </WrapperSobreMim>
  );
};

export default SobreMim;

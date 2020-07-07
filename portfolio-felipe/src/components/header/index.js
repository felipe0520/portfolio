import React from "react";
import { WrapperHeader, WrapperMenu, MyName, ItemMenu } from "./style";

const Header = () => {
  return (
    <WrapperHeader>
      <MyName>Felipe</MyName>
      <WrapperMenu>
        <ItemMenu href="#sobre-mim">Quem sou</ItemMenu>
        <ItemMenu href="#projetos">Projetos</ItemMenu>
        <ItemMenu href="#contrate-me">Contato</ItemMenu>
      </WrapperMenu>
    </WrapperHeader>
  );
};

export default Header;

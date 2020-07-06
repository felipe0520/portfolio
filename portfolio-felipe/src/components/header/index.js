import React from "react";
import { WrapperHeader, WrapperMenu, MyName, ItemMenu } from "./style";

const Header = () => {
  return (
    <WrapperHeader>
      <MyName>Felipe</MyName>
      <WrapperMenu>
        <ItemMenu>Quem sou</ItemMenu>
        <ItemMenu>Projetos</ItemMenu>
        <ItemMenu>Contato</ItemMenu>
      </WrapperMenu>
    </WrapperHeader>
  );
};

export default Header;

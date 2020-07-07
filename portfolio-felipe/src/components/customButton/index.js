import React from "react";
import { WrapperButton, NameButton } from "./style";

const CustonButton = (props) => {
  return (
    <WrapperButton>
      <NameButton>{props.nameButton}</NameButton>
    </WrapperButton>
  );
};

export default CustonButton;

import React from "react";
import { WrapperButton, NameButton } from "./style";

const CustonButton = (props) => {
  return (
    <WrapperButton
      type="button"
      target="_blank"
      href={props.href}
      rel="noopener noreferrer"
      color={props.color}
    >
      <NameButton>{props.nameButton}</NameButton>
    </WrapperButton>
  );
};

export default CustonButton;

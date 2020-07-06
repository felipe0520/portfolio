import React from "react";
import { Separation, SkilName, WrapperSkils } from "./style";

const Skil = (props) => {
  return (
    <WrapperSkils>
      <Separation />
      <SkilName>{props.name}</SkilName>
    </WrapperSkils>
  );
};

export default Skil;

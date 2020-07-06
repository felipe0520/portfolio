import React from "react";
import { Title, WrapperCard, Description } from "./style";

const CardInfo = (props) => {
  return (
    <WrapperCard>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </WrapperCard>
  );
};

export default CardInfo;

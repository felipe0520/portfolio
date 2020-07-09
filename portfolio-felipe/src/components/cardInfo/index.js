import React from "react";
import { Title, WrapperCard, Description } from "./style";

const CardInfo = (props) => {
  return (
    <WrapperCard>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Description>{props.descriptionTwo}</Description>
      <Description>{props.descriptionThree}</Description>
    </WrapperCard>
  );
};

export default CardInfo;

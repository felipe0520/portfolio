import React from "react";
import { Title, WrapperCard, WrapperDescription, Duration } from "./style";

const CardEducation = (props) => {
  return (
    <WrapperCard>
      <Title>{props.title}</Title>
      <WrapperDescription>
        <Duration>{props.duration}</Duration>
        <p>{props.description}</p>
      </WrapperDescription>
    </WrapperCard>
  );
};

export default CardEducation;

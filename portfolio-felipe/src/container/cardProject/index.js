import React from "react";
import CustonButton from "../../components/customButton/";

import { Wrapper, Title, SubTitle, Description } from "./style";

const CardProject = (props) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <SubTitle>{props.subtitle}</SubTitle>
      <Description>{props.description}</Description>
      <div>
        <CustonButton nameButton={props.nameButton} href={props.href} />
        {props.buttonSecondary && (
          <CustonButton nameButton={props.nameButtonSecondary} />
        )}
      </div>
    </Wrapper>
  );
};

export default CardProject;

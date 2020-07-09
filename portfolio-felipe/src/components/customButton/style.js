import styled from "styled-components";

export const WrapperButton = styled.a`
  width: 140px;
  height: 30px;
  border-radius: 8px;
  border: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  ${(props) =>
    props.color === "red"
      ? "background-color: #8d1c31;"
      : props.color === "blue"
      ? "background-color: #4eaccf;"
      : "background-color: #d97824;"}
  margin-top: 32px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const NameButton = styled.span`
  height: 18px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
`;

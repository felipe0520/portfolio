import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  ${(props) =>
    props.color === "red"
      ? "color: #8d1c31;"
      : props.color === "blue"
      ? "color: #4eaccf;"
      : "color: #d97824;"}

  @media
    (max-width: 800px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  height: 52px;
  font-family: Montserrat;
  font-size: 42px;
  font-weight: bold;
  text-align: center;
`;

export const SubTitle = styled.p`
  font-family: Montserrat;
  margin-bottom: 20px;
  font-size: 21px;
`;

export const Description = styled.p`
  height: 122px;
  font-family: Montserrat;
  font-size: 14px;
  text-align: justify;
  @media (max-width: 800px) {
  }
`;

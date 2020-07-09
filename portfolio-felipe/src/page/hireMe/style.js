import styled from "styled-components";

export const Wrapper = styled.div`
  height: 397px;
  background-color: #8d1c31;
  position: relative;
`;

export const Title = styled.h1`
  height: 52px;
  font-family: Montserrat;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.25px;
  text-align: center;
  color: #ffffff;
  padding-top: 54px;
  margin-bottom: 35px;
`;

export const Description = styled.p`
  width: 523px;
  font-family: Montserrat;
  font-size: 18px;
  letter-spacing: -0.24px;
  text-align: center;
  color: #ffffff;
  margin: auto;
  @media (max-width: 600px) {
    width: 350px;
  }
`;

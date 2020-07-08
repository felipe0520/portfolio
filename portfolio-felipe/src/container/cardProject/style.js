import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  width: 172px;
  height: 52px;
  font-family: Montserrat;
  font-size: 42px;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: #ffffff;
`;

export const SubTitle = styled.h4`
  height: 25px;
  font-family: Montserrat;
  margin-bottom: 20px;
  font-size: 21px;
  letter-spacing: -0.28px;
  color: #ffffff;
`;

export const Description = styled.p`
  width: 368px;
  height: 122px;
  font-family: Montserrat;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #ffffff;
  @media (max-width: 800px) {
    width: 300px;
  }
`;

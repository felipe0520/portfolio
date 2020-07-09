import styled from "styled-components";

export const WrapperEducation = styled.div`
  background-color: #d97824;
`;

export const Title = styled.h1`
  margin-bottom: 29px;
  padding-top: 46px;
  text-align: center;
  height: 30px;
  font-family: Montserrat;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.15px;
  text-align: center;
  color: #fff;
`;

export const WrapperCard = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

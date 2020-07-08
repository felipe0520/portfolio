import styled from "styled-components";

export const WrapperEducation = styled.div`
  height: 441px;
  background-color: #8fcbd9;
  @media (max-width: 1060px) {
    height: auto;
  }
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
  color: #377d8c;
`;

export const WrapperCard = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1060px) {
    flex-direction: column;
    align-items: center;
  }
`;

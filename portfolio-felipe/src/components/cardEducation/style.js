import styled from "styled-components";

export const WrapperCard = styled.div`
  width: 327px;
  height: 268px;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  @media (max-width: 1060px) {
    margin: 10px 0;
  }
`;
export const Title = styled.h1`
  margin: 33px 0 12px 0;
  width: 262px;
  height: 50px;
  font-family: Montserrat;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #377d8c;
`;

export const WrapperDescription = styled.div`
  width: 267px;
  height: 122px;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.16px;
  color: #377d8c;
  border: 1px solid red;
`;

export const Duration = styled.p`
  margin-bottom: 10px;
`;

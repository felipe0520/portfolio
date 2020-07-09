import styled from "styled-components";

export const WrapperCard = styled.div`
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 0 25px;
  max-width: 300px;
  @media (max-width: 950px) {
    margin: 20px 0;
  }
`;
export const Title = styled.h1`
  margin: 33px 0 12px 0;
  height: 50px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.28px;
  color: #377d8c;
  text-align: center;
`;

export const WrapperDescription = styled.div`
  text-align: justify;
  font-family: Montserrat;
  font-size: 16px;
  letter-spacing: 2px;
  color: #377d8c;
  margin: 20px;
`;

export const Duration = styled.p`
  margin-bottom: 10px;
`;

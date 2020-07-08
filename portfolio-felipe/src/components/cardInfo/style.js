import styled from "styled-components";

export const WrapperCard = styled.div`
  height: 238px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin: 0 10vw;
  margin-top: 54px;
  @media (max-width: 700px) {
    margin: 0 5vw;
  }
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
  color: #ffffff;
`;

export const Description = styled.span`
  width: 247px;
  height: 133px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  color: #ffffff;
`;

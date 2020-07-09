import styled from "styled-components";

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  margin: 0 10vw;
  width: 25%;
  @media (max-width: 800px) {
    margin: 15px;
    width: 60%;
  }
`;
export const Title = styled.h1`
  text-align: center;
  font-family: Montserrat;
  font-size: 42px;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: #ffffff;
`;

export const Description = styled.span`
  text-align: justify;
  margin-top: 20px;
  font-family: Montserrat;
  font-size: 16px;
  letter-spacing: 2px;
  color: #ffffff;
`;

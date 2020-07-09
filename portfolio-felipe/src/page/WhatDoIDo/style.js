import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #4eaccf;
  padding-bottom: 25px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  height: 30px;
  font-family: Montserrat;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.15px;
  text-align: center;
  color: #ffffff;
  padding-top: 46px;
  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
`;

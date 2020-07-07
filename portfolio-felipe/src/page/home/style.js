import styled from "styled-components";

export const WrapperPresentation = styled.div`
  display: grid;
  height: 650px;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 1100px) {
    height: 500px;
  }
  @media (max-width: 600px) {
    height: 350px;
  }
  @media (max-width: 550px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    height: auto;
  }
`;

export const FirstDivToGrid = styled.div`
  background-color: rgba(113, 202, 223, 0.47);
  display: flex;
  justify-content: space-between;
  height: 650px;
  @media (max-width: 1100px) {
    height: 500px;
  }
  @media (max-width: 600px) {
    height: 350px;
  }
  @media (max-width: 415px) {
    height: auto;
  }
`;

export const SecondDivToGrid = styled.div`
  height: 650px;
  @media (max-width: 1100px) {
    height: auto;
  }
  @media (max-width: 600px) {
    height: 350px;
  }
  @media (max-width: 550px) {
    background-color: rgba(113, 202, 223, 0.47);
    text-align: center;
  }
`;

export const Information = styled.div`
  align-self: center;
  margin-right: 20vw;
  @media (max-width: 1330px) {
    margin-right: 10vw;
  }
  @media (max-width: 1100px) {
    width: 400px;
  }
  @media (max-width: 690px) {
    margin-right: 0vw;
  }
  @media (max-width: 550px) {
    width: 100%;
    height: 280px;
    border: 1px solid red;
  }
`;

export const Title = styled.h1`
  width: 418px;
  height: 122px;
  font-family: Montserrat;
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #337d8d;
  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 550px) {
    font-size: 40px;
  }
`;

export const SubTitle = styled.h2`
  width: 369px;
  height: 29px;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  color: var(--dirty-blue);
  @media (max-width: 1100px) {
    font-size: 15px;
    width: 100%;
  }
`;

export const Description = styled.h3`
  width: 337px;
  height: 19px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  color: #626262;
  @media (max-width: 1100px) {
    font-size: 10px;
    width: 100%;
  }
`;

export const PhotoMe = styled.img`
  width: 100%;
  height: 650px;
  @media (max-width: 1100px) {
    height: 500px;
  }
  @media (max-width: 600px) {
    height: 350px;
  }
  @media (max-width: 550px) {
    width: 70%;
    height: 70%;
  }
`;

import styled from "styled-components";

export const WrapperPresentation = styled.div`
  display: grid;
  height: 650px;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 1100px) {
    height: 500px;
  }
  @media (max-width: 800px) {
    height: 350px;
    padding-top: 60px;
  }
`;

export const FirstDivToGrid = styled.div`
  background-color: #8d1c31;
  display: flex;
  justify-content: space-between;
  height: 650px;
  @media (max-width: 1100px) {
    height: 500px;
  }
  @media (max-width: 800px) {
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
  @media (max-width: 650px) {
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
  @media (max-width: 800px) {
    margin-right: 0vw;
    width: 100%;
    height: 280px;
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
  color: #fff;
  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  height: 29px;
  font-family: Montserrat;
  font-size: 24px;
  letter-spacing: -0.32px;
  color: #fff;
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
  margin-top: 6px;
  letter-spacing: -0.22px;
  color: #fff;
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
  @media (max-width: 800px) {
    height: 350px;
  }
`;

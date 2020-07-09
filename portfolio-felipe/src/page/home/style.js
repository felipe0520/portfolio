import styled from "styled-components";

export const WrapperPresentation = styled.div`
  background-color: #8d1c31;
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
`;
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-size: 1.8em;
  font-weight: bold;
  letter-spacing: -0.29px;
  color: #d97824;
  @media (max-width: 500px) {
    font-size: 1.2em;
  }
`;

export const SubTitle = styled.h2`
  font-family: Montserrat;
  font-size: 1.5em;
  color: #fff;
  @media (max-width: 500px) {
    font-size: 1em;
  }
`;

export const Description = styled.h3`
  font-family: Montserrat;
  font-size: 16px;
  margin-top: 6px;
  letter-spacing: -0.22px;
  color: #fff;
  @media (max-width: 500px) {
    font-size: 0.6em;
  }
`;

export const PhotoMe = styled.img`
  max-width: 25%;
  max-height: 25%;
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 60px;
  height: 1284px;
  background-color: #f2f2f2;
  @media (max-width: 800px) {
    height: auto;
  }
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.15px;
  text-align: center;

  padding-top: 43px;
`;

export const WrapperProject = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const WrapperCards = styled.div`
  display: flex;
  margin-top: 88px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ImgProject = styled.img`
  max-width: 315px;
  max-height: 230px;
  margin: 0 69px;
`;

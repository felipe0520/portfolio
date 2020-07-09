import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 60px;
  background-color: #f2f2f2;
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
  justify-content: space-around;
  margin: 50px 0;
  width: 75%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ImgProject = styled.img`
  max-width: 280px;
  max-height: 215px;
`;

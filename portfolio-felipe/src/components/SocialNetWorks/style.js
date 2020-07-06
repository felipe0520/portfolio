import styled from "styled-components";

export const WrapperSocialNetwork = styled.div`
  display: grid;
  height: 200px;
  grid-template-rows: repeat(4, 1fr);
  gap: 24px;
  align-self: center;
  margin-left: 32px;
  @media (max-width: 800px) {
    margin-right: 25px;
  }
  @media (max-width: 600px) {
    margin-right: 0vw;
    grid-template-columns: repeat(4, 1fr);
    position: absolute;
    top: 370px;
    height: 50px;
  }
  @media (max-width: 415px) {
    top: 300px;
  }
`;

export const LogoSocialNetwork = styled.img``;

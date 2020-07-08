import styled from "styled-components";

export const WrapperSocialNetwork = styled.div`
  display: flex;
  ${(props) =>
    props.horizontal ? " flex-direction:row;" : "flex-direction:column;"}
  gap: 24px;
  align-self: center;
  margin-left: 32px;
  @media (max-width: 800px) {
    margin-right: 0vw;
    position: absolute;
    top: 335px;
    height: 50px;
    flex-direction: row;
    gap: 0;
    width: 50vw;
    margin: 0;
  }
`;

export const LogoSocialNetwork = styled.img``;

export const WrapperLink = styled.div`
  margin: 25px;
  @media (max-width: 600px) {
    margin: 15px;
  }
`;

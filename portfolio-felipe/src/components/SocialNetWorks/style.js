import styled from "styled-components";

export const WrapperSocialNetwork = styled.div`
  display: flex;
  ${(props) =>
    props.horizontal ? " flex-direction:row;" : "flex-direction:column;"}
  ${(props) => (props.horizontal ? " max-width: 250px;" : "height: 250px;")}
  ${(props) => props.horizontal && "margin: auto;"}
  justify-content:space-around;
    align-self: center;
`;

export const LogoSocialNetwork = styled.img``;

export const WrapperLink = styled.div`
  @media (max-width: 1000px) {
    margin: 15px 0;
  }
`;

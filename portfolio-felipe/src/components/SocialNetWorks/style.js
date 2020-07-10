import styled from "styled-components";

export const WrapperSocialNetwork = styled.div`
  display: flex;
  ${(props) =>
    props.horizontal ? " flex-direction:row;" : "flex-direction:column;"}
  ${(props) => props.horizontal && "width: 250px;"}
  ${(props) => props.horizontal && "margin: auto;"}
  justify-content:space-around;
    align-self: center;
    @media (max-width: 700px) {
    ${(props) => (props.horizontal ? " " : "display:none;")}
    }
`;

export const LogoSocialNetwork = styled.img``;

export const WrapperLink = styled.div`
  margin-left: 20px;
  margin-bottom: 35px;
`;

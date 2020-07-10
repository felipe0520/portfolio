import styled from "styled-components";

export const WrapperSkils = styled.div`
  display: flex;
  margin: 15px;
  @media (max-width: 850px) {
    width: 45%;
    margin: 5px;
  }
`;

export const Separation = styled.hr`
  width: 3px;
  height: 14px;
  background-color: #ffffff;
  margin-right: 5px;
`;

export const SkilName = styled.span`
  font-family: Montserrat;
  font-size: 14px;
  letter-spacing: -0.28px;
`;

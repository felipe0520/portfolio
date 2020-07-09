import styled from "styled-components";

export const WrapperHeader = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fffffb;
`;
export const WrapperMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  @media (max-width: 700px) {
    width: 50%;
  }
`;

export const MyName = styled.p`
  margin-left: 32px;
  height: 25px;
  font-family: Montserrat;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: -0.28px;
  color: #377d8c;
`;

export const ItemMenu = styled.a`
  text-decoration: none;
  height: 19px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #377d8c;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

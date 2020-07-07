import styled from "styled-components";

export const WrapperHeader = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fffffb;
`;
export const WrapperMenu = styled.div`
  width: 300px;
  margin-left: 49px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 49px;
  @media (max-width: 500px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const MyName = styled.span`
  margin-left: 32px;
  width: 100px;
  height: 25px;
  font-family: Montserrat;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
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

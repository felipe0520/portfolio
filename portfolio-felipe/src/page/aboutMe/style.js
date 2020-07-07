import styled from "styled-components";

export const WrapperSobreMim = styled.div`
  height: 438px;
  background-color: #377d8c;
  display: flex;
  justify-content: space-around;
  @media (max-width: 700px) {
    flex-direction: column;
    border: 1px solid red;
    height: auto;
    align-items: center;
  }
`;

export const Photo = styled.img`
  width: 305px;
  height: 305px;
  margin-top: 69px;
  margin-left: 15vw;
  @media (max-width: 1100px) {
    margin-left: 7vw;
  }
  @media (max-width: 800px) {
    margin-left: 3vw;
  }
`;

export const WrapperInfo = styled.div`
  color: white;
  width: 368px;
  display: flex;
  flex-direction: column;
  margin-top: 69px;
  margin-right: 15vw;
  @media (max-width: 1100px) {
    margin-right: 7vw;
  }
  @media (max-width: 800px) {
    margin-right: 3vw;
  }
`;
export const Title = styled.h1`
  height: 52px;
  font-family: Montserrat;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  margin-bottom: 20px;
  @media (max-width: 400px) {
    height: 40px;
    margin: 10px auto;
  }
`;

export const SubTitle = styled.span`
  width: 368px;
  height: 122px;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.16px;
  color: #ffffff;
  @media (max-width: 400px) {
    height: auto;
    width: 300px;
    margin: auto;
  }
`;

export const WrapperSkils = styled.div`
  margin-top: 26px;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 140px;
  height: 30px;
  border-radius: 8px;
  border: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #4eaccf;
  margin-top: 32px;
`;

export const NameButton = styled.span`
  width: 79px;
  height: 18px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: center;
  color: #ffffff;
`;

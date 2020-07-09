import styled from "styled-components";

export const WrapperSobreMim = styled.div`
  background-color: #063447;
  display: flex;
  justify-content: center;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Photo = styled.img`
  width: 305px;
  height: 305px;
  margin-top: 150px;
  margin-right: 15vw;

  @media (max-width: 850px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const WrapperInfo = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: 69px;
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
  @media (max-width: 850px) {
    text-align: center;
  }
  @media (max-width: 400px) {
    height: 40px;
    margin: 30px auto;
  }
`;

export const Description = styled.span`
  width: 500px;
  font-family: Montserrat;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 1.5px;
  margin-bottom: 40px;
  @media (max-width: 700px) {
    width: 400px;
    text-align: center;
    margin: auto;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
`;

export const WrapperSkils = styled.div`
  width: 450px;
  margin-top: 26px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 450px) {
    width: auto;
    flex-direction: column;
    height: 300px;
    margin: 10px auto;
  }
`;

export const Button = styled.a`
  width: 140px;
  height: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #4eaccf;
  margin: 32px auto;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const NameButton = styled.span`
  height: 18px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
`;

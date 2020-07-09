import styled from "styled-components";

export const WrapperSobreMim = styled.div`
  background-color: #063447;
  display: flex;
  justify-content: space-around;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Photo = styled.img`
  @media (max-width: 450px) {
    width: 50%;
    height: 50%;
  }
`;

export const WrapperInfo = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: 69px;
  width: 50%;
`;
export const Title = styled.h3`
  font-family: Montserrat;
  font-size: 42px;
  font-weight: bold;
  letter-spacing: -0.32px;
  text-align: center;
`;

export const Description = styled.span`
  margin-top: 20px;
  font-family: Montserrat;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 1.5px;
  margin-bottom: 40px;
  text-align: center;
`;

export const WrapperSkils = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
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
  letter-spacing: -0.28px;
`;

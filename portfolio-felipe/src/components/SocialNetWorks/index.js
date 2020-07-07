import React from "react";
import { WrapperSocialNetwork, LogoSocialNetwork } from "./style";

const SocialNetWork = (props) => {
  return (
    <WrapperSocialNetwork horizontal={props.horizontal}>
      <LogoSocialNetwork src={require("../../image/homePage/linkedin.svg")} />
      <LogoSocialNetwork src={require("../../image/homePage/wpp.svg")} />
      <LogoSocialNetwork src={require("../../image/homePage/github.svg")} />
      <LogoSocialNetwork src={require("../../image/homePage/instagram.svg")} />
    </WrapperSocialNetwork>
  );
};

export default SocialNetWork;

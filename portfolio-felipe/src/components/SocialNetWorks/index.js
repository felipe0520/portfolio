import React from "react";
import { WrapperSocialNetwork, LogoSocialNetwork, WrapperLink } from "./style";

const SocialNetWork = (props) => {
  return (
    <WrapperSocialNetwork horizontal={props.horizontal}>
      <WrapperLink>
        <a
          href="https://www.linkedin.com/in/felipe-ferraz-b33523189"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoSocialNetwork
            src={require("../../image/homePage/linkedin.svg")}
          ></LogoSocialNetwork>
        </a>
      </WrapperLink>
      <WrapperLink>
        <a
          href=" http://api.whatsapp.com/send?1=pt_BR&phone=5531982299943"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoSocialNetwork src={require("../../image/homePage/wpp.svg")} />
        </a>
      </WrapperLink>
      <WrapperLink>
        <a
          href="https://github.com/felipe0520"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoSocialNetwork src={require("../../image/homePage/github.svg")} />
        </a>
      </WrapperLink>
      <WrapperLink>
        <a
          href="https://www.instagram.com/felipee_frz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoSocialNetwork
            src={require("../../image/homePage/instagram.svg")}
          />
        </a>
      </WrapperLink>
    </WrapperSocialNetwork>
  );
};

export default SocialNetWork;

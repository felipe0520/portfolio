import React from "react";
import { WrapperFooter, InfoFooter } from "./style";

const year = new Date();

const Footer = () => {
  return (
    <WrapperFooter>
      <InfoFooter>&copy; {year.getFullYear()} Felipe</InfoFooter>
    </WrapperFooter>
  );
};

export default Footer;

import React from "react";
import { WrapperEducation, Title, WrapperCard } from "./style";
import CardEducation from "../../components/cardEducation";

const Education = () => {
  return (
    <WrapperEducation>
      <Title>Educação</Title>
      <WrapperCard>
        <CardEducation
          title="Curso de Web Full Stack
            na Labenu"
          duration="6 meses - 2020"
          description="
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad 
            minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. "
        />
        <CardEducation
          title="Curso de Web Full Stack
             na Labenu"
          duration="6 meses - 2020"
          description="
             Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt ut 
             labore et dolore magna aliqua. Ut enim ad 
             minim veniam, quis nostrud exercitation 
             ullamco laboris nisi ut aliquip ex ea 
             commodo consequat. Duis aute irure dolor 
             in reprehenderit in voluptate velit esse cillum dolore eu 
             fugiat nulla pariatur. "
        />

        <CardEducation
          title="Curso de Web Full Stack
           na Labenu"
          duration="6 meses - 2020"
          description="
           Lorem ipsum dolor sit amet, 
           consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut 
           labore et dolore magna aliqua. Ut enim ad 
           minim veniam, quis nostrud exercitation 
           ullamco laboris nisi ut aliquip ex ea 
           commodo consequat. Duis aute irure dolor 
           in reprehenderit in voluptate velit esse cillum dolore eu 
           fugiat nulla pariatur. "
        />
      </WrapperCard>
    </WrapperEducation>
  );
};

export default Education;

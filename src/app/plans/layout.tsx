import React from "react";
import { BackroundImg, Container, Feature, Navbar } from "@/components";
import img from "../../assets/back1.jpg";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <BackroundImg img={img} className="">
      <Container>
        <Navbar />
        {children}
      </Container>
    </BackroundImg>
  );
};

export default layout;

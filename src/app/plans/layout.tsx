import React from "react";
import { BackroundImg, Container, Feature, Navbar } from "@/components";
import img from "../../assets/back1.jpg";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <BackroundImg img={img} className="">
      <Container>
        <Navbar />
        <div className="h-screen flex justify-center ">
          <Feature />
        </div>
      </Container>
    </BackroundImg>
  );
};

export default layout;

import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

interface PropsType {
  img: StaticImageData;
  children: ReactNode;
  className: string;
}

const BackroundImg = ({ img, children, className }: PropsType) => {
  return (
    <div
      className={`relative bg-no-repeat bg-right-top bg-cover bg-none ${className}`}
      style={{ backgroundImage: `url(${img.src})` }}
    >
      <div className="bg-black bg-opacity-40">{children}</div>
    </div>
  );
};

export default BackroundImg;

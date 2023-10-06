import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const navMenu = [
    { name: "Home", ref: "/" },
    { name: "Plans", ref: "/plans" },
    { name: "Trainers", ref: "/trainers" },
    { name: "About us", ref: "/about" },
    { name: "Contact us", ref: "/contact" },
  ];

  return (
    <Container>
      <div className="fixed top-0 left-0 right-0 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:max-w-[68%] h-[80px] p-2">
          <div className="w-[120px]">
            <Image src={Logo} alt="Logo" />
          </div>
          <div className="flex justify-center gap-3 text-lg font-medium lg:font-normal lg:text-2xl ">
            {navMenu.map((nav, index) => (
              <div key={index} className="hover:text-red-400">
                <Link href={nav.ref}>{nav.name}</Link>
              </div>
            ))}
          </div>
          {/* <div>
            <button>logIn</button>
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
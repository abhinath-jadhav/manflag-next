import backroundImg from "../assets/hero.jpg";
import Link from "next/link";
import { BackroundImg, Container, Feature, Navbar } from "@/components";

export default function Home() {
  return (
    <BackroundImg img={backroundImg} className="">
      <Container>
        <Navbar />
        <div className="h-screen flex items-center ml-8">
          <div className="">
            <div className=" text-[2rem] lg:text-[4rem]  font-semibold">
              <p className="text-slate-300">
                Elevate Your Strength with <br />
                <span className="text-white text-[3rem] lg:text-[5rem]">
                  Manflag Fitness
                </span>
              </p>
            </div>

            <div className="mt-12">
              <Link
                className="border rounded-xl text-2xl p-4  bg-orange-400 border-orange-400 font-semibold"
                href={"/plans"}
              >
                Check Plans
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </BackroundImg>
  );
}

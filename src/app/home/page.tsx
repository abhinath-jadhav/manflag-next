import { Container } from "@/components";
import backroundImg from "../../assets/hero1.jpg";

const Home = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${backroundImg.src})`,
          backgroundSize: "cover", // Adjust as needed
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top", // Adjust as needed
          width: "100%",
          // Adjust as needed
        }}
        className=" h-screen"
      >
        <Container>
          <div className="relative">
            <div className="absolute top-32 lg:top-64 left-20 ">
              <div>
                <div className="text-[5rem] font-bold">
                  <p>YOUR BODY</p>
                  <p>YOUR RULE</p>
                </div>
                <button className="border rounded-xl text-2xl p-4 ml-4 mt-8 bg-orange-400 border-orange-400 font-semibold">
                  Check Plans
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;

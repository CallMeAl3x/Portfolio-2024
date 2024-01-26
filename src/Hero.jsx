import ArrowDown from "/arrow-down.svg";

const Hero = () => {
  return (
    <main className="h-screen w-full gradient-background flex text-white flex-col rounded-b-[86px]">
      <div className="lg:ml-12 lg:mt-[36.5vh] mt-52 text-center lg:text-left">
        <h1 className="lg:text-[94px] text-[40px] lg:text-left">
          Portfolio 2024
        </h1>
        <h2 className="lg:text-[94px] text-[40px]">Bonefons Alexandre</h2>
      </div>
      <div className="flex flex-col text mr-auto ml-auto items-center justify-center mt-auto mb-6">
        <p className="uppercase text-[39px]">Scroll</p>
        <img src={ArrowDown} className="h-[75px] w-[42px]" alt="ArrowDown" />
      </div>
    </main>
  );
};

export default Hero;

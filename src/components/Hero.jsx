const Hero = () => {
  return (
    <main
      className="h-[99.4lvh] section w-full dark:gradient-background-dark gradient-background-light flex text-text flex-col rounded-b-[86px]"
      id="home">
      <div className="lg:ml-12 lg:mt-[20.5vh] mt-32 text-center lg:text-left font-semibold flex lg:flex-row flex-col items-center">
        <div className="flex flex-col w-full lg:w-[60%]">
          <h2 className="lg:text-[74px] md:text-[50px] text-[26px]">Bonefons Alexandre</h2>
          <h1 className="lg:text-[74px] md:text-[50px] text-[26px] lg:text-left">
            Web Developer
          </h1>
        </div>
        <div className="w-full lg:w-[30%]">
          <h3 className="lg:text-[40px] md:text-[20px] text-[16px] mt-8 text-center">
            Développeur web passionné par la création d&apos;expériences
            utilisateur exceptionnelles.
          </h3>
        </div>
      </div>
      <a
        href="#works"
        className="flex flex-col text mr-auto ml-auto items-center justify-center mt-auto mb-6">
        <p className="uppercase text-[36px] font-bold">Scroll</p>
        <svg
          width="42"
          height="75"
          viewBox="0 0 42 75"
          fill="var(--color-svg-fill-black)"
          alt="ArrowDown"
          className="h-[75px] w-[42px]"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 60.9375C19.6935 60.9375 18.667 59.9062 18.667 58.5938V16.4062C18.667 15.0938 19.6935 14.0625 21 14.0625C22.3064 14.0625 23.3329 15.0938 23.3329 16.4062V58.5938C23.3329 59.9062 22.3064 60.9375 21 60.9375Z"
            fill="var(--color-svg-fill-black)"
          />
          <path
            d="M21.0002 65.625C20.6942 65.6287 20.3908 65.5681 20.1096 65.447C19.8283 65.3259 19.5754 65.1471 19.3671 64.9219L3.03632 48.5156C2.10313 47.5781 2.10313 46.125 3.03632 45.1875C3.9695 44.25 5.41594 44.25 6.34913 45.1875L21.0468 59.9531L35.7445 45.1875C36.6777 44.25 38.1241 44.25 39.0573 45.1875C39.9905 46.125 39.9905 47.5781 39.0573 48.5156L22.7266 64.9219C22.26 65.3906 21.6534 65.625 21.0935 65.625H21.0002Z"
            fill="var(--color-svg-fill-black)"
          />
        </svg>
      </a>
    </main>
  );
};

export default Hero;

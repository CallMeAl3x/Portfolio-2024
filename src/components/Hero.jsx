import { FormattedMessage } from "react-intl";

const Hero = () => {
  return (
    <main
      className="section dark:gradient-background-dark gradient-background-light flex h-max w-full flex-col rounded-b-[70px] px-1.5 text-background dark:text-text  sm:h-[84lvh] sm:px-0 lg:h-[100vh] lg:rounded-b-[40px]"
      id="home"
    >
      <div className="xl:justify-left flex h-full flex-col items-center justify-center gap-12 text-center font-semibold md:mt-0 lg:mt-0 lg:gap-8 xl:items-center">
        <h2 className="mt-20 text-[45px] sm:text-[50px] lg:mt-24 lg:text-[74px] xl:text-[94px]">
          Bonefons Alexandre
        </h2>
        <h3 className="max-w-[1000px] text-center text-[22px] text-[#4992ff] dark:text-[#00FFFF] sm:text-[26px] lg:text-[50px]">
          <FormattedMessage id="hero.description" />
        </h3>

        <h5 className="max-w-[750px] text-center text-[18px] sm:text-[26px] lg:mt-2 lg:text-[30px]">
          <FormattedMessage
            id="hero.stage"
            values={{
              travaux: (words) => (
                <a className="worklink" href="#works">
                  {words}
                </a>
              ), // Pour surligner
              highlight: (words) => (
                <span className="wordenternship-light dark:wordenternship">
                  {words}
                </span>
              ), // Pour surligner
            }}
          />
        </h5>
      </div>
      <a
        href="#works"
        className="mb-6 ml-auto mr-auto mt-16 flex flex-col items-center justify-center lg:mt-[2%]"
      >
        <p className="text-[36px] font-bold uppercase text-background dark:text-text">
          Scroll
        </p>
        <svg
          width="42"
          height="75"
          viewBox="0 0 42 75"
          fill="var(--color-svg-fill)"
          alt="ArrowDown"
          className="h-[58px] w-[42px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 60.9375C19.6935 60.9375 18.667 59.9062 18.667 58.5938V16.4062C18.667 15.0938 19.6935 14.0625 21 14.0625C22.3064 14.0625 23.3329 15.0938 23.3329 16.4062V58.5938C23.3329 59.9062 22.3064 60.9375 21 60.9375Z"
            fill="var(--color-svg-fill)"
          />
          <path
            d="M21.0002 65.625C20.6942 65.6287 20.3908 65.5681 20.1096 65.447C19.8283 65.3259 19.5754 65.1471 19.3671 64.9219L3.03632 48.5156C2.10313 47.5781 2.10313 46.125 3.03632 45.1875C3.9695 44.25 5.41594 44.25 6.34913 45.1875L21.0468 59.9531L35.7445 45.1875C36.6777 44.25 38.1241 44.25 39.0573 45.1875C39.9905 46.125 39.9905 47.5781 39.0573 48.5156L22.7266 64.9219C22.26 65.3906 21.6534 65.625 21.0935 65.625H21.0002Z"
            fill="var(--color-svg-fill)"
          />
        </svg>
      </a>
    </main>
  );
};

export default Hero;

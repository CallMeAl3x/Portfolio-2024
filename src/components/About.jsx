import { FormattedMessage } from "react-intl";
import man from "/man.webp";

const About = () => {
  return (
    <section className="relative mt-0">
      <div className="absolute top-[-11%]" id="about"></div>
      <h3 className="gradient-text font-font-manrope mt-20 bg-gradient-footer-tittle_white bg-clip-text text-center text-[40px] font-semibold dark:bg-gradient-title sm:text-[70px] lg:text-[102px] xl:mt-24 ">
        <FormattedMessage id="aboutme.title" />
      </h3>
      <div className="flex flex-col items-center justify-center lg:flex-row 2xl:ml-auto 2xl:mr-auto 2xl:max-w-[1800px]">
        <img
          loading="lazy"
          src={man}
          alt="Man"
          className="z-[3] mt-12 w-full lg:w-1/2"
          draggable={false}
        />
        <div className="lg:p-46 xl:mt-22 mt-8 flex w-full flex-col p-4 lg:w-1/2 xl:ml-12">
          <p className="ml-auto mr-auto max-w-[700px] whitespace-pre-line text-center text-[16px] text-text md:text-[18px] lg:text-left lg:text-[20px] xl:ml-0 xl:mr-0 2xl:max-w-[900px]">
            <FormattedMessage
              id="about.description"
              values={{
                travaux: (words) => (
                  <a className="worklink" href="#works">
                    {words}
                  </a>
                ), // Pour surligner
                highlight: (words) => <span className="accent">{words}</span>, // Pour surligner
              }}
            />
          </p>
          <a
            href="/CV_Bonefons_Alexandre.pdf"
            target="_blank"
            className="font-syne ml-auto mr-auto mt-8 w-fit rounded-xl bg-black p-2 text-2xl font-semibold text-background dark:bg-white xl:ml-0"
          >
            <FormattedMessage id="cv" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

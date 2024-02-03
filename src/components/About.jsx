import { FormattedMessage } from "react-intl";
import man from "/man.webp";

const About = () => {
  return (
    <section className="relative mt-0" id="about">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <img
          loading="lazy"
          src={man}
          alt="Man"
          className="z-[3] mt-52 w-full lg:w-1/2"
          draggable={false}
        />
        <div className="lg:p-46 xl:mt-22 mt-8 w-full p-4 lg:w-1/2">
          <p className="ml-auto mr-auto max-w-[700px] whitespace-pre-line text-center text-[16px] text-text md:text-[18px] lg:text-left lg:text-[20px]">
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
        </div>
      </div>
    </section>
  );
};

export default About;

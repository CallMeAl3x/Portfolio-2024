import { FormattedMessage } from "react-intl";
import weatherapp from "/weatherapp.webp";
import webdocumentary from "/webdocumentary.webp";
import datavisualisation from "/datavisualisation.webp";
import translateapp from "/translateapp.webp";
import "../index.css";
import ReactCurvedText from "react-curved-text";
import Links from "../utils/Links";
import { useLanguage } from "../LanguageContext";

const Works = () => {
  const { locale } = useLanguage();

  const isFrench = locale === "fr";

  const text = isFrench ? "Voir sur Github" : "See on Github";

  const textanimation = (
    <ReactCurvedText
      width={100}
      height={100}
      cx={50}
      cy={50}
      rx={42.5}
      ry={42.5}
      startOffset={0}
      reversed={false}
      text={text}
      textProps={{ style: { fontSize: 20 } }}
      textPathProps={{
        fill: "#ffffff",
        fontWeight: "500",
        fontFamily: "Syne",
        letterSpacing: "3px",
      }}
      tspanProps={null}
      ellipseProps={null}
      svgProps={{ className: "rotating-curved-text" }}
    />
  );

  const githublogo = (
    <>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        className="h-fit w-fit xl:h-[60px] xl:w-[60px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 5C26.717 5 23.4661 5.64664 20.4329 6.90301C17.3998 8.15938 14.6438 10.0009 12.3223 12.3223C7.63392 17.0107 5 23.3696 5 30C5 41.05 12.175 50.425 22.1 53.75C23.35 53.95 23.75 53.175 23.75 52.5V48.275C16.825 49.775 15.35 44.925 15.35 44.925C14.2 42.025 12.575 41.25 12.575 41.25C10.3 39.7 12.75 39.75 12.75 39.75C15.25 39.925 16.575 42.325 16.575 42.325C18.75 46.125 22.425 45 23.85 44.4C24.075 42.775 24.725 41.675 25.425 41.05C19.875 40.425 14.05 38.275 14.05 28.75C14.05 25.975 15 23.75 16.625 21.975C16.375 21.35 15.5 18.75 16.875 15.375C16.875 15.375 18.975 14.7 23.75 17.925C25.725 17.375 27.875 17.1 30 17.1C32.125 17.1 34.275 17.375 36.25 17.925C41.025 14.7 43.125 15.375 43.125 15.375C44.5 18.75 43.625 21.35 43.375 21.975C45 23.75 45.95 25.975 45.95 28.75C45.95 38.3 40.1 40.4 34.525 41.025C35.425 41.8 36.25 43.325 36.25 45.65V52.5C36.25 53.175 36.65 53.975 37.925 53.75C47.85 50.4 55 41.05 55 30C55 26.717 54.3534 23.4661 53.097 20.4329C51.8406 17.3998 49.9991 14.6438 47.6777 12.3223C45.3562 10.0009 42.6002 8.15938 39.5671 6.90301C36.5339 5.64664 33.283 5 30 5Z"
          fill="var(--color-svg-fill)"
        />
      </svg>
    </>
  );

  return (
    <main
      className="section work part mx-4 mt-32 flex flex-col items-center gap-24 md:mx-8 xl:mx-0 xl:ml-auto xl:mr-auto xl:mt-32"
      id="works"
    >
      <h3 className="gradient-text font-font-manrope mt-20 bg-gradient-footer-tittle_white bg-clip-text text-center text-[60px] font-semibold dark:bg-gradient-title sm:text-[70px] lg:text-[102px] xl:mt-48 ">
        <FormattedMessage id="works.title" />
      </h3>
      <div className="card component mt-0 flex flex-col justify-center gap-8 sm:flex-row sm:items-center lg:mt-10 lg:max-w-[84%] xl:ml-auto xl:mr-auto xl:gap-24">
        <div className="dark:gradient-card-dark gradient-card-light card  info relative flex flex-col rounded-xl text-center sm:w-[70%] xl:w-fit xl:flex-row xl:text-left">
          <div className="p-4 text-[32px] text-text lg:ml-4 xl:p-8 xl:text-[55px]">
            <h4 className="font-bold">
              <FormattedMessage id="card_title1" />
            </h4>
            <span className="font-bold text-background dark:text-accent">
              <FormattedMessage id="card_green1" />
            </span>
            <div className="mt-4 flex w-full flex-col justify-center xl:justify-between">
              <p className="ml-auto mr-auto w-full whitespace-pre-line text-center text-base xl:max-w-[460px] xl:text-left">
                <FormattedMessage id="card_description1" />
              </p>

              <div className="mt-7 flex flex-col justify-center gap-4 text-base font-semibold md:items-center xl:mt-10 xl:flex-row xl:justify-start xl:pb-3">
                <div className="flex flex-col items-center gap-4 md:flex-row">
                  <button className="btn_skills">React Context</button>
                  <button className="btn_skills">Fetch API</button>
                </div>
                <div className="flex justify-center">
                  <button className="btn_skills">React</button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-10 mt-6 flex flex-col items-center justify-evenly gap-12 lg:flex-row lg:items-end lg:gap-0 xl:ml-12 xl:flex-col xl:justify-between xl:pr-12">
            <a
              href={Links.WeatherGithub}
              data-url={Links.WeatherGithub}
              className="z-[2]"
              aria-label="Voir le projet Weather sur GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative flex h-fit w-fit cursor-pointer justify-center align-middle">
                {githublogo}
                {textanimation}
              </div>
            </a>
            <a
              href={Links.WeatherWebsite}
              role="button"
              target="_blank"
              rel="noreferrer"
              className="flex w-max items-center justify-center rounded-[16px] bg-white px-2.5 py-2 font-inter text-2xl font-extrabold italic text-[#030D30] dark:bg-white"
            >
              <FormattedMessage id="websitesee" />
            </a>
          </div>
        </div>

        <div className="flex h-full items-center justify-center">
          <a href={Links.WeatherWebsite}>
            <img
              loading="lazy"
              src={weatherapp}
              className="h-full w-auto cursor-pointer xl:max-w-none"
              alt="WeatherApp"
              target="_blank"
            />
          </a>
        </div>
      </div>

      <div className="card component mt-0 flex flex-col justify-center gap-8 sm:flex-row-reverse sm:items-center lg:mt-10 lg:max-w-[84%] xl:ml-auto xl:mr-auto xl:gap-24">
        <div className="dark:gradient-card-dark-right gradient-card-light card  info relative flex flex-col rounded-xl text-center sm:w-[70%] xl:w-fit xl:flex-row-reverse xl:text-right">
          <div className="p-4 text-[32px] text-text lg:ml-4 xl:p-8 xl:text-[55px]">
            <h4 className="font-bold">
              <FormattedMessage id="card_title2" />
            </h4>
            <span className="font-bold text-background dark:text-accent">
              <FormattedMessage id="card_green2" />
            </span>
            <div className="mt-4 flex w-full flex-col justify-center xl:justify-between">
              <p className="ml-auto mr-auto w-full whitespace-pre-line text-center text-base xl:max-w-[460px] xl:text-right">
                <FormattedMessage id="card_description2" />
              </p>

              <div className="mt-7 flex flex-col justify-center gap-4 text-base font-semibold md:items-center xl:mt-10 xl:flex-row-reverse xl:justify-start xl:pb-3">
                <div className="flex flex-col items-center gap-4 md:flex-row">
                  <button className="btn_skills">TailwindCSS</button>
                  <button className="btn_skills">TinderCard</button>
                </div>
                <div className="flex justify-center">
                  <button className="btn_skills">React</button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-10 mt-6 flex flex-col items-center justify-evenly gap-12 lg:flex-row lg:items-start lg:gap-0 xl:ml-12 xl:flex-col xl:justify-between xl:pr-12">
            <a
              href={Links.WebdocumentaireGithub}
              data-url={Links.WebdocumentaireGithub}
              className="z-[2]"
              aria-label="Voir le projet Webdocumentaire sur GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative flex h-fit w-fit cursor-pointer justify-center align-middle">
                {githublogo}
                {textanimation}
              </div>
            </a>
            <a
              href={Links.WebdocumentaireWebsite}
              target="_blank"
              rel="noreferrer"
              className="flex w-max cursor-pointer items-center justify-center rounded-[16px] bg-white px-2.5 py-2 font-inter text-2xl font-extrabold italic text-[#030D30] dark:bg-white"
            >
              Voir le site
            </a>
          </div>
        </div>

        <div className="flex h-full items-center justify-center">
          <a href={Links.WebdocumentaireWebsite}>
            <img
              loading="lazy"
              src={webdocumentary}
              className="h-full w-auto cursor-pointer xl:max-w-none"
              alt="Weather App"
              target="_blank"
            />
          </a>
        </div>
      </div>

      <div className="card component mt-0 flex flex-col justify-center gap-8 sm:flex-row sm:items-center lg:mt-10 lg:max-w-[84%] xl:ml-auto xl:mr-auto xl:gap-24">
        <div className="dark:gradient-card-dark gradient-card-light card  info relative flex flex-col rounded-xl text-center sm:w-[70%] xl:w-fit xl:flex-row xl:text-left">
          <div className="p-4 text-[32px] text-text lg:ml-4 xl:p-8 xl:text-[55px]">
            <h4 className="font-bold">
              <FormattedMessage id="card_title3" />
            </h4>
            <span className="font-bold text-background dark:text-accent">
              <FormattedMessage id="card_green3" />
            </span>
            <div className="mt-4 flex w-full flex-col justify-center xl:justify-between">
              <p className="ml-auto mr-auto w-full whitespace-pre-line text-center text-base xl:max-w-[460px] xl:text-left">
                <FormattedMessage id="card_description3" />
              </p>

              <div className="mt-7 flex flex-col justify-center gap-4 text-base font-semibold md:items-center xl:mt-10 xl:flex-row xl:justify-start xl:pb-3">
                <div className="flex flex-col items-center gap-4 md:flex-row">
                  <button className="btn_skills">TailwindCSS</button>
                  <button className="btn_skills">Appels API</button>
                </div>
                <div className="flex justify-center">
                  <button className="btn_skills">ChartJS</button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-10 mt-6 flex flex-col items-center justify-evenly gap-12 lg:flex-row lg:items-end lg:gap-0 xl:ml-12 xl:flex-col xl:justify-between xl:pr-12">
            <a
              href={Links.DataVisualisationGithub}
              className="z-[2]"
              aria-label="Voir le projet Webdocumentaire sur GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative flex h-fit w-fit cursor-pointer justify-center align-middle">
                {githublogo}
                {textanimation}
              </div>
            </a>
            <a
              href={Links.DataVisualisationWebsite}
              role="button"
              target="_blank"
              rel="noreferrer"
              className="flex w-max items-center justify-center rounded-[16px] bg-white px-2.5 py-2 font-inter text-2xl font-extrabold italic text-[#030D30] dark:bg-white"
            >
              Voir le site
            </a>
          </div>
        </div>

        <div className="flex h-full items-center justify-center">
          <a href={Links.DataVisualisationWebsite}>
            <img
              src={datavisualisation}
              loading="lazy"
              className="h-full w-auto cursor-pointer xl:max-w-none"
              alt="Datavisualisation"
              target="_blank"
            />
          </a>
        </div>
      </div>

      <div className="card component mt-0 flex flex-col justify-center gap-8 sm:flex-row-reverse sm:items-center lg:mt-10 lg:max-w-[84%] xl:ml-auto xl:mr-auto xl:gap-44">
        <div className="dark:gradient-card-dark-right gradient-card-light card  info relative flex flex-col rounded-xl text-center sm:w-[70%] xl:w-fit xl:flex-row-reverse xl:text-right">
          <div className="p-4 text-[32px] text-text lg:ml-4 xl:p-8 xl:text-[55px]">
            <h4 className="font-bold">
              <FormattedMessage id="card_title4" />
            </h4>
            <span className="font-bold text-background dark:text-accent">
              <FormattedMessage id="card_green4" />
            </span>
            <div className="mt-4 flex w-full flex-col justify-center xl:justify-between">
              <p className="ml-auto mr-auto w-full whitespace-pre-line text-center text-base xl:max-w-[460px] xl:text-right">
                <FormattedMessage id="card_description4" />
              </p>

              <div className="mt-7 flex flex-col justify-center gap-4 text-base font-semibold md:items-center xl:mt-10 xl:flex-row-reverse xl:justify-start xl:pb-3">
                <div className="flex flex-col items-center gap-4 md:flex-row">
                  <button className="btn_skills">ResponsiveVoice API</button>
                  <button className="btn_skills">Mymemory</button>
                </div>
                <div className="flex justify-center">
                  <button className="btn_skills">Vite</button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-10 mt-6 flex flex-col items-center justify-evenly gap-12 lg:flex-row lg:items-start lg:gap-0 xl:ml-12 xl:flex-col xl:justify-between xl:pr-12">
            <a
              href={Links.TranslateAppGithub}
              className="z-[2]"
              aria-label="Voir le projet Webdocumentaire sur GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative flex h-fit w-fit cursor-pointer justify-center align-middle">
                {githublogo}
                {textanimation}
              </div>
            </a>
            <a
              href={Links.TranslateAppWebsite}
              role="button"
              target="_blank"
              rel="noreferrer"
              className="flex w-max items-center justify-center rounded-[16px] bg-white px-2.5 py-2 font-inter text-2xl font-extrabold italic text-[#030D30] dark:bg-white"
            >
              Voir le site
            </a>
          </div>
        </div>

        <div className="flex h-full items-center justify-center">
          <a href={Links.TranslateAppWebsite}>
            <img
              loading="lazy"
              src={translateapp}
              className="h-full w-auto cursor-pointer xl:max-w-none"
              alt="Translate App"
              target="_blank"
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Works;

import { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import Links from "../utils/Links";
import weatherapp from "/weatherapp.webp";
import GithubLogoAnimation from "./GithubLogoAnimation";

const Card1 = () => {
  let bounds;
  const inputRef = useRef();
  const rotateToMouse = (e) => {
    bounds = inputRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    inputRef.current.style.transform = `
      scale3d(1.03, 1.03, 1.03)
      rotate3d(
        ${center.y / 300},
        ${-center.x / 300},
        0,
        ${Math.log(distance) * 1}deg
      )
    `;
  };
  const removeListener = () => {
    inputRef.current.style.transform = "";
    inputRef.current.style.background = "";
  };
  useEffect(() => {});

  return (
    <div className="app mt-0 flex flex-col justify-center gap-8 p-1 sm:flex-row sm:items-center lg:mt-10 lg:max-w-[84%] xl:ml-auto xl:mr-auto xl:gap-24">
      <div
        className="dark:gradient-card-dark gradient-card-light dark:card card-light relative flex flex-col rounded-xl text-center sm:w-[70%] xl:w-fit xl:flex-row xl:text-left"
        ref={inputRef}
        onMouseLeave={removeListener}
        onMouseMove={rotateToMouse}
      >
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
            <GithubLogoAnimation />
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
  );
};

export default Card1;

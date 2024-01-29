import { FormattedMessage } from "react-intl";
import weatherapp from "/weatherapp.png";
import webdocumentary from "/webdocumentary.png";
import datavisualisation from "/datavisualisation.png";
import translateapp from "/translateapp.png";
import "../index.css";

const Works = () => {
  return (
    <main
      className="section work part mx-8 mt-32 flex flex-col gap-24 xl:mx-0 xl:mt-32"
      id="works"
    >
      <h3 className="gradient-text mt-20 bg-gradient-title bg-clip-text text-center font-[Monrope] text-[60px] font-semibold sm:text-[70px] lg:text-[102px] xl:mt-48 ">
        Works
      </h3>
      <div className="card component mt-0 flex w-full flex-col justify-center gap-8 sm:flex-row sm:items-center lg:mt-10 xl:gap-24">
        <div className="dark:gradient-card-dark gradient-card-light card  info relative flex flex-col rounded-xl text-center sm:w-[70%] xl:w-fit xl:flex-row xl:text-left">
          <div className="p-4 text-[32px] text-text lg:ml-4 xl:p-8 xl:text-[55px]">
            <h4 className="font-bold">
              <FormattedMessage id="card_title1" />
            </h4>
            <span className="font-bold text-background dark:text-accent">
              <FormattedMessage id="card_green1" />
            </span>
            <div className="mt-4 flex w-full flex-col justify-center xl:justify-between">
              <p className="ml-auto mr-auto w-full whitespace-pre-line text-center text-base xl:max-w-[550px] xl:text-left">
                <FormattedMessage id="card_description1" />
              </p>

              <div className="mt-7 flex flex-col justify-center gap-4 text-base font-semibold md:items-center xl:mt-10 xl:flex-row xl:justify-start xl:pb-3">
                <div className="flex flex-col items-center gap-4 md:flex-row">
                  <button className="btn_skills">TailwindCSS</button>
                  <button className="btn_skills">Fetch API</button>
                </div>
                <div className="flex justify-center">
                  <button className="btn_skills">React</button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10 mt-6 flex items-center justify-evenly xl:ml-24 xl:flex-col xl:justify-between xl:pr-12">
            <a
              href="https://github.com/CallMeAl3x/Weather"
              target="_blank"
              rel="noreferrer"
            >
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
            </a>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-text dark:bg-accent">
              <a
                href="https://weather-app-b-alexandre.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  alt="Github"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.125 36.125C19.1251 36.5452 19.2497 36.956 19.4832 37.3054C19.7167 37.6547 20.0486 37.927 20.4368 38.0878C20.8251 38.2486 21.2523 38.2907 21.6644 38.2087C22.0766 38.1268 22.4552 37.9245 22.7523 37.6274L33.3773 27.0024C33.7757 26.6039 33.9995 26.0635 33.9995 25.5C33.9995 24.9365 33.7757 24.3961 33.3773 23.9976L22.7523 13.3726C22.4552 13.0755 22.0766 12.8732 21.6644 12.7913C21.2523 12.7093 20.8251 12.7514 20.4368 12.9122C20.0486 13.073 19.7167 13.3453 19.4832 13.6947C19.2497 14.044 19.1251 14.4548 19.125 14.875L19.125 36.125Z"
                    fill="#f1f4f8"
                  />
                </svg>
              </a>
            </button>
          </div>
        </div>

        <div className="flex h-full items-center justify-center">
          <a
            href="https://weather-app-b-alexandre.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={weatherapp}
              className="h-full w-auto xl:max-w-none"
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="card component mt-20 flex w-full flex-col justify-center gap-8 sm:flex-row-reverse sm:items-center lg:flex-row-reverse xl:gap-24">
        <div className="dark:gradient-card-dark-right gradient-card-light card info relative flex flex-col rounded-xl text-center sm:w-[70%] xl:w-fit xl:flex-row-reverse xl:text-left">
          <div className="mt-4 flex flex-col items-center justify-center p-4 text-[32px] text-text lg:ml-4 xl:mt-0 xl:items-end xl:justify-start xl:p-8 xl:text-[55px]">
            <h4 className="text-end font-bold">
              <FormattedMessage id="card_title2" />
            </h4>
            <span className="font-bold text-background dark:text-accent">
              <FormattedMessage id="card_green2" />
            </span>
            <div className="mt-6 flex flex-col xl:items-end xl:justify-end">
              <p className="ml-auto mr-auto w-full whitespace-pre-line text-center text-base xl:max-w-[550px] xl:text-right">
                <FormattedMessage id="card_description2" />
              </p>

              <div className="mt-7 flex flex-col justify-center gap-4 text-base font-semibold md:items-center xl:mt-10 xl:flex-row xl:justify-start xl:pb-2.5">
                <div className="flex flex-col items-center gap-4 md:flex-row">
                  <button className="btn_skills">TailwindCSS</button>
                  <button className="btn_skills">Fetch API</button>
                </div>
                <div className="flex justify-center">
                  <button className="btn_skills">TinderCard</button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10 mt-6 flex items-center justify-evenly xl:ml-8 xl:flex-col xl:justify-between xl:pr-12">
            <a
              href="https://github.com/CallMeAl3x/Sae308"
              target="_blank"
              rel="noreferrer"
            >
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
            </a>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-text dark:bg-accent  xl:rotate-180">
              <a
                href="https://webdoc-dating-app.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  alt="Github"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.125 36.125C19.1251 36.5452 19.2497 36.956 19.4832 37.3054C19.7167 37.6547 20.0486 37.927 20.4368 38.0878C20.8251 38.2486 21.2523 38.2907 21.6644 38.2087C22.0766 38.1268 22.4552 37.9245 22.7523 37.6274L33.3773 27.0024C33.7757 26.6039 33.9995 26.0635 33.9995 25.5C33.9995 24.9365 33.7757 24.3961 33.3773 23.9976L22.7523 13.3726C22.4552 13.0755 22.0766 12.8732 21.6644 12.7913C21.2523 12.7093 20.8251 12.7514 20.4368 12.9122C20.0486 13.073 19.7167 13.3453 19.4832 13.6947C19.2497 14.044 19.1251 14.4548 19.125 14.875L19.125 36.125Z"
                    fill="#f1f4f8"
                  />
                </svg>
              </a>
            </button>
          </div>
        </div>

        <div className="flex h-full items-center justify-center">
          <a
            href="https://webdoc-dating-app.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={webdocumentary}
              className="h-full w-auto xl:max-w-none"
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="card component mt-20 flex w-full flex-col justify-center gap-8 sm:flex-row sm:items-center xl:gap-24">
        <div className="dark:gradient-card-dark gradient-card-light card  info relative flex flex-col rounded-xl text-center sm:w-[70%] xl:w-fit xl:flex-row xl:text-left">
          <div className="p-4 text-[32px] text-text lg:ml-4 xl:p-8 xl:text-[55px]">
            <h4 className="font-bold">
              <FormattedMessage id="card_title3" />
            </h4>
            <span className="font-bold text-background dark:text-accent">
              <FormattedMessage id="card_green3" />
            </span>
            <div className="mt-4 flex w-full flex-col justify-center xl:justify-between">
              <p className="ml-auto mr-auto w-full whitespace-pre-line text-center text-base xl:max-w-[550px] xl:text-left">
                <FormattedMessage id="card_description3" />
              </p>

              <div className="mt-7 flex flex-col justify-center gap-4 text-base font-semibold md:items-center xl:mt-10 xl:flex-row xl:justify-start xl:pb-3">
                <div className="flex flex-col items-center gap-4 md:flex-row">
                  <button className="btn_skills">TailwindCSS</button>
                  <button className="btn_skills">Fetch API</button>
                </div>
                <div className="flex justify-center">
                  <button className="btn_skills">React</button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10 mt-6 flex items-center justify-evenly xl:ml-12 xl:flex-col xl:justify-between xl:pr-12">
            <a
              href="https://github.com/CallMeAl3x/chartjs"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="var(--color-svg-fill)"
                className="h-fit w-fit xl:h-[60px] xl:w-[60px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 5C26.717 5 23.4661 5.64664 20.4329 6.90301C17.3998 8.15938 14.6438 10.0009 12.3223 12.3223C7.63392 17.0107 5 23.3696 5 30C5 41.05 12.175 50.425 22.1 53.75C23.35 53.95 23.75 53.175 23.75 52.5V48.275C16.825 49.775 15.35 44.925 15.35 44.925C14.2 42.025 12.575 41.25 12.575 41.25C10.3 39.7 12.75 39.75 12.75 39.75C15.25 39.925 16.575 42.325 16.575 42.325C18.75 46.125 22.425 45 23.85 44.4C24.075 42.775 24.725 41.675 25.425 41.05C19.875 40.425 14.05 38.275 14.05 28.75C14.05 25.975 15 23.75 16.625 21.975C16.375 21.35 15.5 18.75 16.875 15.375C16.875 15.375 18.975 14.7 23.75 17.925C25.725 17.375 27.875 17.1 30 17.1C32.125 17.1 34.275 17.375 36.25 17.925C41.025 14.7 43.125 15.375 43.125 15.375C44.5 18.75 43.625 21.35 43.375 21.975C45 23.75 45.95 25.975 45.95 28.75C45.95 38.3 40.1 40.4 34.525 41.025C35.425 41.8 36.25 43.325 36.25 45.65V52.5C36.25 53.175 36.65 53.975 37.925 53.75C47.85 50.4 55 41.05 55 30C55 26.717 54.3534 23.4661 53.097 20.4329C51.8406 17.3998 49.9991 14.6438 47.6777 12.3223C45.3562 10.0009 42.6002 8.15938 39.5671 6.90301C36.5339 5.64664 33.283 5 30 5Z"
                  fill="var(--color-svg-fill)"
                />
              </svg>
            </a>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-text dark:bg-accent">
              <a
                href="https://datavisualisation-cinema.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  alt="Github"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.125 36.125C19.1251 36.5452 19.2497 36.956 19.4832 37.3054C19.7167 37.6547 20.0486 37.927 20.4368 38.0878C20.8251 38.2486 21.2523 38.2907 21.6644 38.2087C22.0766 38.1268 22.4552 37.9245 22.7523 37.6274L33.3773 27.0024C33.7757 26.6039 33.9995 26.0635 33.9995 25.5C33.9995 24.9365 33.7757 24.3961 33.3773 23.9976L22.7523 13.3726C22.4552 13.0755 22.0766 12.8732 21.6644 12.7913C21.2523 12.7093 20.8251 12.7514 20.4368 12.9122C20.0486 13.073 19.7167 13.3453 19.4832 13.6947C19.2497 14.044 19.1251 14.4548 19.125 14.875L19.125 36.125Z"
                    fill="#f1f4f8"
                  />
                </svg>
              </a>
            </button>
          </div>
        </div>

        <div className="flex h-full items-center justify-center">
          <a
            href="https://datavisualisation-cinema.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={datavisualisation}
              className="h-full w-auto xl:max-w-none"
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="card component mt-20 flex w-full flex-col justify-center gap-8 sm:flex-row-reverse sm:items-center lg:flex-row-reverse xl:gap-24">
        <div className="dark:gradient-card-dark-right gradient-card-light card info relative flex flex-col rounded-xl text-center sm:w-[70%] xl:w-fit xl:flex-row-reverse xl:text-left">
          <div className="mt-4 flex flex-col items-center justify-center p-4 text-[32px] text-text lg:ml-4 xl:mt-0 xl:items-end xl:justify-start xl:p-8 xl:text-[55px]">
            <h4 className="text-end font-bold">
              <FormattedMessage id="card_title4" />
            </h4>
            <span className="font-bold text-background dark:text-accent">
              <FormattedMessage id="card_green4" />
            </span>
            <div className="mt-16 flex flex-col items-center xl:items-end xl:justify-end">
              <p className="ml-auto w-full whitespace-pre-line text-center text-base xl:max-w-[567px] xl:text-right">
                <FormattedMessage id="card_description4" />
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-4 text-base font-semibold md:grid md:grid-cols-2 xl:mt-10 xl:flex xl:flex-row xl:pb-3">
                <button className="btn_skills">ResponsiveVoice</button>
                <button className="btn_skills">TailwindCSS</button>
                <button className="btn_skills">Mymemory</button>
                <button className="btn_skills">React</button>
              </div>
            </div>
          </div>
          <div className="mb-10 mt-6 flex items-center justify-evenly xl:ml-8 xl:flex-col xl:justify-between xl:pr-12">
            <a
              href="https://github.com/CallMeAl3x/Translate-App"
              target="_blank"
              rel="noreferrer"
            >
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
            </a>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-text dark:bg-accent  xl:rotate-180">
              <a
                href="https://translate-b-alexandre.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  alt="Github"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.125 36.125C19.1251 36.5452 19.2497 36.956 19.4832 37.3054C19.7167 37.6547 20.0486 37.927 20.4368 38.0878C20.8251 38.2486 21.2523 38.2907 21.6644 38.2087C22.0766 38.1268 22.4552 37.9245 22.7523 37.6274L33.3773 27.0024C33.7757 26.6039 33.9995 26.0635 33.9995 25.5C33.9995 24.9365 33.7757 24.3961 33.3773 23.9976L22.7523 13.3726C22.4552 13.0755 22.0766 12.8732 21.6644 12.7913C21.2523 12.7093 20.8251 12.7514 20.4368 12.9122C20.0486 13.073 19.7167 13.3453 19.4832 13.6947C19.2497 14.044 19.1251 14.4548 19.125 14.875L19.125 36.125Z"
                    fill="#f1f4f8"
                  />
                </svg>
              </a>
            </button>
          </div>
        </div>

        <div className="flex h-full items-center justify-center">
          <a
            href="https://translate-b-alexandre.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={translateapp}
              className="h-full w-auto xl:max-w-none"
              alt=""
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Works;

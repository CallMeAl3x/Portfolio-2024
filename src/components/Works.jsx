import { FormattedMessage } from "react-intl";
import weatherapp from "/weatherapp.png";
import webdocumentary from "/webdocumentary.png";
import datavisualisation from "/datavisualisation.png";
import translateapp from "/translateapp.png";

const Works = () => {
  return (
    <main
      className="mx-8 section lg:mx-0 mt-20 lg:mt-32 work part flex flex-col gap-24"
      id="works">
      <div className="card component flex lg:flex-row mt-20 flex-col justify-center w-full gap-8 lg:gap-24">
        <div className="relative dark:gradient-card-dark gradient-card-light  rounded-xl flex lg:flex-row flex-col card info text-center lg:text-left">
          <div className="lg:text-[55px] text-[32px] text-text lg:p-8 p-4 ml-4">
            <h4 className="font-bold">
              <FormattedMessage id="card_title1" />
            </h4>
            <span className="text-background dark:text-accent font-bold">
              <FormattedMessage id="card_green1" />
            </span>
            <div className="flex flex-col lg:justify-between justify-center w-full mt-4">
              <p className="text-base text-center lg:text-left lg:max-w-[550px] w-full whitespace-pre-line ml-auto mr-auto">
                <FormattedMessage id="card_description1" />
              </p>

              <div className="flex text-base gap-4 mt-7 font-semibold">
                <button className="py-2 bg-[#D7D7D7]/65 font-semibold px-3 rounded-[25px]">
                  TailwindCSS
                </button>
                <button className="py-2 bg-[#D7D7D7]/65 font-semibold px-3 rounded-[25px]">
                  Fetch API
                </button>
                <button className="py-2 bg-[#D7D7D7]/65 font-semibold px-3 rounded-[25px]">
                  React
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-col lg:justify-between mt-6 mb-10 lg:ml-24 lg:pr-12 justify-evenly items-center">
            <a
              href="https://github.com/CallMeAl3x"
              target="_blank"
              rel="noreferrer">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                className="lg:h-[60px] lg:w-[60px] w-fit h-fit"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30 5C26.717 5 23.4661 5.64664 20.4329 6.90301C17.3998 8.15938 14.6438 10.0009 12.3223 12.3223C7.63392 17.0107 5 23.3696 5 30C5 41.05 12.175 50.425 22.1 53.75C23.35 53.95 23.75 53.175 23.75 52.5V48.275C16.825 49.775 15.35 44.925 15.35 44.925C14.2 42.025 12.575 41.25 12.575 41.25C10.3 39.7 12.75 39.75 12.75 39.75C15.25 39.925 16.575 42.325 16.575 42.325C18.75 46.125 22.425 45 23.85 44.4C24.075 42.775 24.725 41.675 25.425 41.05C19.875 40.425 14.05 38.275 14.05 28.75C14.05 25.975 15 23.75 16.625 21.975C16.375 21.35 15.5 18.75 16.875 15.375C16.875 15.375 18.975 14.7 23.75 17.925C25.725 17.375 27.875 17.1 30 17.1C32.125 17.1 34.275 17.375 36.25 17.925C41.025 14.7 43.125 15.375 43.125 15.375C44.5 18.75 43.625 21.35 43.375 21.975C45 23.75 45.95 25.975 45.95 28.75C45.95 38.3 40.1 40.4 34.525 41.025C35.425 41.8 36.25 43.325 36.25 45.65V52.5C36.25 53.175 36.65 53.975 37.925 53.75C47.85 50.4 55 41.05 55 30C55 26.717 54.3534 23.4661 53.097 20.4329C51.8406 17.3998 49.9991 14.6438 47.6777 12.3223C45.3562 10.0009 42.6002 8.15938 39.5671 6.90301C36.5339 5.64664 33.283 5 30 5Z"
                  fill="var(--color-svg-fill)"
                />
              </svg>
            </a>
            <button className="flex justify-center items-center dark:bg-accent bg-text rounded-full h-12 w-12">
              <a
                href="https://weather-app-b-alexandre.netlify.app"
                target="_blank"
                rel="noreferrer">
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  alt="Github"
                  xmlns="http://www.w3.org/2000/svg">
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

        <div className="flex items-center justify-center h-full">
          <img
            src={weatherapp}
            className="lg:max-w-none h-full w-auto"
            alt=""
          />
        </div>
      </div>

      <div className="card component mt-20 flex lg:flex-row-reverse flex-col justify-center w-full gap-8 lg:gap-24">
        <div className="relative dark:gradient-card-dark-right gradient-card-light pr-4 rounded-xl flex lg:flex-row-reverse flex-col card info text-center lg:text-left">
          <div className="lg:text-[55px] text-[32px] text-text lg:p-8 p-4 ml-4 flex-col flex justify-center lg:justify-start items-center lg:items-end lg:mt-0 mt-4">
            <h4 className="font-bold text-end">
              <FormattedMessage id="card_title2" />
            </h4>
            <span className="text-background dark:text-accent font-bold">
              <FormattedMessage id="card_green2" />
            </span>
            <div className="flex flex-col lg:justify-end lg:items-end mt-6">
              <p className="text-base text-center lg:text-right lg:max-w-[550px] w-full whitespace-pre-line ml-auto mr-auto">
                <FormattedMessage id="card_description2" />
              </p>

              <div className="flex justify-end text-base gap-4 mt-8 pb-3.5 font-semibol">
                <button className="py-2 bg-[#D7D7D7]/65 font-semibold px-3 rounded-[25px]">
                  TailwindCSS
                </button>
                <button className="py-2 bg-[#D7D7D7]/65 font-semibold px-3 rounded-[25px]">
                  React
                </button>
                <button className="py-2 bg-[#D7D7D7]/65 font-semibold px-3 rounded-[25px]">
                  TinderCard
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-col lg:justify-between mt-6 mb-10 lg:ml-8 lg:pr-12 justify-evenly items-center">
            <a
              href="https://github.com/CallMeAl3x"
              target="_blank"
              rel="noreferrer">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                className="lg:h-[60px] lg:w-[60px] w-fit h-fit"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30 5C26.717 5 23.4661 5.64664 20.4329 6.90301C17.3998 8.15938 14.6438 10.0009 12.3223 12.3223C7.63392 17.0107 5 23.3696 5 30C5 41.05 12.175 50.425 22.1 53.75C23.35 53.95 23.75 53.175 23.75 52.5V48.275C16.825 49.775 15.35 44.925 15.35 44.925C14.2 42.025 12.575 41.25 12.575 41.25C10.3 39.7 12.75 39.75 12.75 39.75C15.25 39.925 16.575 42.325 16.575 42.325C18.75 46.125 22.425 45 23.85 44.4C24.075 42.775 24.725 41.675 25.425 41.05C19.875 40.425 14.05 38.275 14.05 28.75C14.05 25.975 15 23.75 16.625 21.975C16.375 21.35 15.5 18.75 16.875 15.375C16.875 15.375 18.975 14.7 23.75 17.925C25.725 17.375 27.875 17.1 30 17.1C32.125 17.1 34.275 17.375 36.25 17.925C41.025 14.7 43.125 15.375 43.125 15.375C44.5 18.75 43.625 21.35 43.375 21.975C45 23.75 45.95 25.975 45.95 28.75C45.95 38.3 40.1 40.4 34.525 41.025C35.425 41.8 36.25 43.325 36.25 45.65V52.5C36.25 53.175 36.65 53.975 37.925 53.75C47.85 50.4 55 41.05 55 30C55 26.717 54.3534 23.4661 53.097 20.4329C51.8406 17.3998 49.9991 14.6438 47.6777 12.3223C45.3562 10.0009 42.6002 8.15938 39.5671 6.90301C36.5339 5.64664 33.283 5 30 5Z"
                  fill="var(--color-svg-fill)"
                />
              </svg>
            </a>
            <button className="flex justify-center items-center dark:bg-accent bg-text rounded-full h-12 w-12  lg:rotate-180">
              <a
                href="https://weather-app-b-alexandre.netlify.app"
                target="_blank"
                rel="noreferrer">
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  alt="Github"
                  xmlns="http://www.w3.org/2000/svg">
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

        <div className="flex items-center justify-center h-full">
          <img
            src={webdocumentary}
            className="lg:max-w-none h-full w-auto"
            alt=""
          />
        </div>
      </div>

      <div className="card component flex lg:flex-row mt-20 flex-col justify-center w-full gap-8 lg:gap-24">
        <div className="relative dark:gradient-card-dark gradient-card-light  rounded-xl flex lg:flex-row flex-col card info text-center lg:text-left">
          <div className="lg:text-[55px] text-[32px] text-text lg:p-8 p-4 ml-4">
            <h4 className="font-bold">
              <FormattedMessage id="card_title3" />
            </h4>
            <span className="text-background dark:text-accent font-bold">
              <FormattedMessage id="card_green3" />
            </span>
            <div className="flex flex-col lg:justify-between justify-center w-full mt-4">
              <p className="text-base text-center lg:text-left lg:max-w-[550px] w-full whitespace-pre-line ml-auto mr-auto">
                <FormattedMessage id="card_description3" />
              </p>

              <div className="flex text-base gap-4 mt-7 font-semibold justify-center">
                <button className="py-2 bg-[#D7D7D7]/65 font-semibold px-3 rounded-[25px]">
                  TailwindCSS
                </button>
                <button className="py-2 bg-[#D7D7D7]/65 font-semibold px-3 rounded-[25px]">
                  Fetch API
                </button>
                <button className="py-2 bg-[#D7D7D7]/65 font-semibold px-3 rounded-[25px]">
                  React
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-col lg:justify-between mt-6 mb-10 lg:ml-12 lg:pr-12 justify-evenly items-center">
            <a
              href="https://github.com/CallMeAl3x"
              target="_blank"
              rel="noreferrer">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                className="lg:h-[60px] lg:w-[60px] w-fit h-fit"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30 5C26.717 5 23.4661 5.64664 20.4329 6.90301C17.3998 8.15938 14.6438 10.0009 12.3223 12.3223C7.63392 17.0107 5 23.3696 5 30C5 41.05 12.175 50.425 22.1 53.75C23.35 53.95 23.75 53.175 23.75 52.5V48.275C16.825 49.775 15.35 44.925 15.35 44.925C14.2 42.025 12.575 41.25 12.575 41.25C10.3 39.7 12.75 39.75 12.75 39.75C15.25 39.925 16.575 42.325 16.575 42.325C18.75 46.125 22.425 45 23.85 44.4C24.075 42.775 24.725 41.675 25.425 41.05C19.875 40.425 14.05 38.275 14.05 28.75C14.05 25.975 15 23.75 16.625 21.975C16.375 21.35 15.5 18.75 16.875 15.375C16.875 15.375 18.975 14.7 23.75 17.925C25.725 17.375 27.875 17.1 30 17.1C32.125 17.1 34.275 17.375 36.25 17.925C41.025 14.7 43.125 15.375 43.125 15.375C44.5 18.75 43.625 21.35 43.375 21.975C45 23.75 45.95 25.975 45.95 28.75C45.95 38.3 40.1 40.4 34.525 41.025C35.425 41.8 36.25 43.325 36.25 45.65V52.5C36.25 53.175 36.65 53.975 37.925 53.75C47.85 50.4 55 41.05 55 30C55 26.717 54.3534 23.4661 53.097 20.4329C51.8406 17.3998 49.9991 14.6438 47.6777 12.3223C45.3562 10.0009 42.6002 8.15938 39.5671 6.90301C36.5339 5.64664 33.283 5 30 5Z"
                  fill="var(--color-svg-fill)"
                />
              </svg>
            </a>
            <button className="flex justify-center items-center dark:bg-accent bg-text rounded-full h-12 w-12">
              <a
                href="https://weather-app-b-alexandre.netlify.app"
                target="_blank"
                rel="noreferrer">
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  alt="Github"
                  xmlns="http://www.w3.org/2000/svg">
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

        <div className="flex items-center justify-center h-full">
          <img
            src={datavisualisation}
            className="lg:max-w-none h-full w-auto"
            alt=""
          />
        </div>
      </div>

      <div className="card component mt-20 flex lg:flex-row-reverse flex-col justify-center w-full gap-8 lg:gap-52">
        <div className="relative dark:gradient-card-dark-right gradient-card-light pr-4 rounded-xl flex lg:flex-row-reverse flex-col card info text-center lg:text-left">
          <div className="lg:text-[55px] text-[32px] text-text lg:p-8 p-4 ml-4 flex-col flex justify-center lg:justify-start items-center lg:items-end lg:mt-0 mt-4">
            <h4 className="font-bold text-end">
              <FormattedMessage id="card_title4" />
            </h4>
            <span className="text-background dark:text-accent font-bold">
              <FormattedMessage id="card_green4" />
            </span>
            <div className="flex flex-col lg:justify-end items-end mt-16">
              <p className="text-base text-center lg:text-right lg:max-w-[567px] w-full whitespace-pre-line ml-auto mr-auto">
                <FormattedMessage id="card_description4" />
              </p>
              <div className="flex justify-end text-base gap-4 mt-8 pb-3.5 font-semibol">
                <button className="py-2 bg-[#D7D7D7]/65 font-semibold px-3 rounded-[25px]">
                  TailwindCSS
                </button>
                <button className="py-2 bg-[#D7D7D7]/65 font-semibold px-3 rounded-[25px]">
                  React
                </button>
                <button className="py-2 bg-[#D7D7D7]/65 font-semibold px-3 rounded-[25px]">
                  ResponsiveVoice
                </button>
                <button className="py-2 bg-[#D7D7D7]/65 font-semibold px-3 rounded-[25px]">
                  Mymemory
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-col lg:justify-between mt-6 mb-10 lg:ml-8 lg:pr-12 justify-evenly items-center">
            <a
              href="https://github.com/CallMeAl3x"
              target="_blank"
              rel="noreferrer">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                className="lg:h-[60px] lg:w-[60px] w-fit h-fit"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30 5C26.717 5 23.4661 5.64664 20.4329 6.90301C17.3998 8.15938 14.6438 10.0009 12.3223 12.3223C7.63392 17.0107 5 23.3696 5 30C5 41.05 12.175 50.425 22.1 53.75C23.35 53.95 23.75 53.175 23.75 52.5V48.275C16.825 49.775 15.35 44.925 15.35 44.925C14.2 42.025 12.575 41.25 12.575 41.25C10.3 39.7 12.75 39.75 12.75 39.75C15.25 39.925 16.575 42.325 16.575 42.325C18.75 46.125 22.425 45 23.85 44.4C24.075 42.775 24.725 41.675 25.425 41.05C19.875 40.425 14.05 38.275 14.05 28.75C14.05 25.975 15 23.75 16.625 21.975C16.375 21.35 15.5 18.75 16.875 15.375C16.875 15.375 18.975 14.7 23.75 17.925C25.725 17.375 27.875 17.1 30 17.1C32.125 17.1 34.275 17.375 36.25 17.925C41.025 14.7 43.125 15.375 43.125 15.375C44.5 18.75 43.625 21.35 43.375 21.975C45 23.75 45.95 25.975 45.95 28.75C45.95 38.3 40.1 40.4 34.525 41.025C35.425 41.8 36.25 43.325 36.25 45.65V52.5C36.25 53.175 36.65 53.975 37.925 53.75C47.85 50.4 55 41.05 55 30C55 26.717 54.3534 23.4661 53.097 20.4329C51.8406 17.3998 49.9991 14.6438 47.6777 12.3223C45.3562 10.0009 42.6002 8.15938 39.5671 6.90301C36.5339 5.64664 33.283 5 30 5Z"
                  fill="var(--color-svg-fill)"
                />
              </svg>
            </a>
            <button className="flex justify-center items-center dark:bg-accent bg-text rounded-full h-12 w-12  lg:rotate-180">
              <a
                href="https://weather-app-b-alexandre.netlify.app"
                target="_blank"
                rel="noreferrer">
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  alt="Github"
                  xmlns="http://www.w3.org/2000/svg">
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

        <div className="flex items-center justify-center h-full">
          <img
            src={translateapp}
            className="lg:max-w-none h-full w-auto"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Works;

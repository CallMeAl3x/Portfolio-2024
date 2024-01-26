import { FormattedMessage } from "react-intl";
import github from "/github.svg";
import play from "/play.svg";
import weatherapp from "/weatherapp.png";

const Works = () => {
  return (
    <main className="mx-8 lg:mx-0 mt-12 lg:mt-32 work part">
      <div className="card component flex lg:flex-row flex-col justify-center w-full gap-8 lg:gap-24">
        <div className="relative gradient-card rounded-xl flex lg:flex-row flex-col card info text-center lg:text-left">
          <div className="lg:text-[73px] text-[32px] text-white lg:p-8 p-4 ml-4">
            <h4 className="font-bold">
              <FormattedMessage id="card_title1" />
            </h4>
            <span className="text-green-300 font-bold">
              <FormattedMessage id="card_green1" />
            </span>
            <div className="flex lg:justify-between justify-center w-full mt-4">
              <p className="text-base text-center lg:text-left max-w-[400px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-col lg:justify-between mt-6 mb-10 lg:ml-24 lg:pr-12 justify-evenly items-center">
            <a
              href="https://github.com/CallMeAl3x"
              target="_blank"
              rel="noreferrer">
              <img
                src={github}
                className="lg:h-[60px] lg:w-[60px] w-fit h-fit"
                alt=""
              />
            </a>
            <button className="flex justify-center items-center bg-[#00FFA3] rounded-full h-12 w-12">
              <a
                href="https://weather-app-b-alexandre.netlify.app"
                target="_blank"
                rel="noreferrer">
                <img src={play} alt="" />
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
    </main>
  );
};

export default Works;

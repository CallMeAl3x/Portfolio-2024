import mail from "/mail.svg";
import linkedin from "/linkedin.svg";
import github from "/github.svg";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <footer
      className="section dark:gradient-background-footer-dark gradient-background-footer-light h-full rounded-t-[86px] pb-12 lg:mt-44 lg:pb-24"
      id="contact"
    >
      <h3 className="gradient-text bg-gradient-footer-tittle_white relative top-16 mb-44 mt-20 text-center font-manrope text-[60px] font-semibold dark:bg-gradient-footer-tittle lg:text-[70px]">
        Contact
      </h3>
      <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
        <a
          href="mailto:Alexandre.bonefons@outlook.fr"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex w-full max-w-[11rem] items-center justify-center gap-2 rounded-[22px] bg-secondary px-8 py-2 lg:w-fit lg:justify-normal lg:px-10">
            <img src={mail} className="h-[20px] w-[24px]" alt="Mail icon" />
            <p className="text-xl text-background dark:text-text">Email</p>
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/alexandre-bonefons-166875250/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex w-full max-w-[11rem] items-center justify-center gap-2 rounded-[22px] bg-secondary px-8 py-2 lg:w-fit lg:justify-normal lg:px-10">
            <img
              src={linkedin}
              className="h-[25px] w-[25px]"
              alt="Linkedin icon"
            />
            <p className="text-xl text-background dark:text-text">Linkedin</p>
          </button>
        </a>
        <a
          href="https://github.com/CallMeAl3x"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex w-full max-w-[11rem] items-center justify-center gap-2 rounded-[22px] bg-secondary px-8 py-2 lg:w-fit lg:justify-normal lg:px-10">
            <img
              src={github}
              loading="lazy"
              className="h-[25px] w-[25px]"
              alt="Github icon"
            />
            <p className="text-xl text-background dark:text-text">GitHub</p>
          </button>
        </a>
      </div>

      <p className="mt-16 flex justify-center text-text">
        <FormattedMessage id="rights" />
      </p>
    </footer>
  );
};

export default Footer;

import mail from "/mail.svg";
import linkedin from "/linkedin.svg";
import github from "/github.svg";

const Footer = () => {
  return (
    <footer
      className="h-full section dark:gradient-background-footer-dark gradient-background-footer-light rounded-t-[86px] mt-96 pb-24"
      id="contact">
      <h3 className="lg:text-[70px] mb-44 top-16 relative text-[60px] mt-20 font-[Monrope] font-semibold bg-gradient-footer-tittle text-center gradient-text">
        Contact
      </h3>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-6">
        <button className="flex gap-2 items-center px-8 justify-center lg:justify-normal w-full max-w-[11rem] lg:w-fit lg:px-10 py-2 rounded-[22px] bg-secondary">
          <img src={mail} className="w-[24px] h-[20px]" alt="" />
          <p className="text-background dark:text-text">Email</p>
        </button>
        <button className="flex gap-2 items-center px-8 justify-center lg:justify-normal w-full max-w-[11rem] lg:w-fit lg:px-10 py-2 rounded-[22px] bg-secondary">
          <img src={linkedin} className="w-[25px] h-[25px]" alt="" />
          <p className="text-background dark:text-text">Linkedin</p>
        </button>
        <button className="flex gap-2 items-center px-8 justify-center lg:justify-normal w-full max-w-[11rem] lg:w-fit lg:px-10 py-2 rounded-[22px] bg-secondary">
          <img src={github} className="w-[25px] h-[25px]" alt="" />
          <p className="text-background dark:text-text">GitHub</p>
        </button>
      </div>

      <p className="text-text mt-16 flex justify-center">
        Copyright ©2024 - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;

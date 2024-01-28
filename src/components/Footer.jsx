import mail from "/mail.svg";
import linkedin from "/linkedin.svg";
import github from "/github.svg";

const Footer = () => {
  return (
    <footer
      className="h-full section dark:gradient-background-footer-dark gradient-background-footer-light rounded-t-[86px] mt-44 pb-24"
      id="contact">
      <h3 className="lg:text-[70px] text-[40px] mb-44 after:content-[''] after:absolute top-16 after:top-16 lg:after:top-32 relative text-text text-center after:border after:border-solid after:border-text after:w-[50%] lg:after:w-[30%] after:-translate-x-1/2 after:left-[50%]">
        Contact
      </h3>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-6 text-text">
        <button className="flex gap-2 items-center px-8 justify-center lg:justify-normal w-full max-w-[11rem] lg:w-fit lg:px-10 py-2 rounded-[22px] bg-[#4F4F4F]">
          <img src={mail} className="w-[24px] h-[20px]" alt="" />
          <p>Email</p>
        </button>
        <button className="flex gap-2 items-center px-8 justify-center lg:justify-normal w-full max-w-[11rem] lg:w-fit lg:px-10 py-2 rounded-[22px] bg-[#4F4F4F]">
          <img src={linkedin} className="w-[25px] h-[25px]" alt="" />
          <p>Linkedin</p>
        </button>
        <button className="flex gap-2 items-center px-8 justify-center lg:justify-normal w-full max-w-[11rem] lg:w-fit lg:px-10 py-2 rounded-[22px] bg-[#4F4F4F]">
          <img src={github} className="w-[25px] h-[25px]" alt="" />
          <p>GitHub</p>
        </button>
      </div>

      <p className="text-text mt-16 flex justify-center">
        Copyright ©2024 - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;

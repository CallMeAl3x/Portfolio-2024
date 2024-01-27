// Navbar.js
import { useContext, useState } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { useLanguage } from "../LanguageContext";
import sun_active from "/sun_active.svg";
import sun_inactive from "/sun_inactive.svg";
import moon_active from "/moon_active.svg";
import moon_inactive from "/moon_inactive.svg";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);
  const { setLocale, locale } = useLanguage();

  const handleLangageToggleFR = () => {
    setLocale("fr");
    handleHamburgerToggle();
  };

  const handleLangageToggleEN = () => {
    setLocale("en");
    handleHamburgerToggle();
    console.log(setLocale);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleHamburgerToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center fixed top-0 left-0 z-[11] w-screen">
        <svg
          className={`ham hamRotate ham1 z-10 relative lg:hidden ${
            isOpen ? "active" : ""
          }`}
          viewBox="0 0 100 100"
          width="80"
          onClick={handleHamburgerToggle}>
          <path
            className="line top text-path dark:white-path"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path
            className="line middle text-path dark:white-path"
            d="m 30,50 h 40"
          />
          <path
            className="line bottom text-path dark:white-path"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
        <label className="mr-12 flex justify-center items-center bg-[#0D1224] rounded-full p-2.5 lg:hidden">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeToggle}
            className="appearance-none"
          />
          <div className="flex justify-center gap-6 items-center">
            {darkMode ? (
              <>
                <img
                  src={moon_inactive}
                  alt=""
                  className="h-8 w-8 max-w-none"
                />
                <img src={sun_active} alt="" className="h-8 w-8 max-w-none" />
              </>
            ) : (
              <>
                <img src={moon_active} alt="" className="h-8 w-8 max-w-none" />
                <img src={sun_inactive} alt="" className="h-8 w-8 max-w-none" />
              </>
            )}
          </div>
        </label>
      </div>

      <nav
        className={`lg:hidden text-text flex justify-center h-screen w-screen fixed top-0 left-0 transform gradient-nav-light dark:gradient-nav-dark z-100 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}>
        <ul className="flex flex-col gap-12 justify-center items-center text-xl group-last:gap-34">
          <li
            className="h-12 w-24 flex justify-center items-center rounded-[60px]"
            onClick={handleHamburgerToggle}>
            <a href="#Home">Home</a>
          </li>
          <li
            className="h-12 w-24 flex justify-center items-center rounded-[60px]"
            onClick={handleHamburgerToggle}>
            <a href="#About">About</a>
          </li>
          <li
            className="h-12 w-24 flex justify-center items-center rounded-[60px]"
            onClick={handleHamburgerToggle}>
            <a href="#Works">Works</a>
          </li>
          <li
            className="h-12 w-24 flex justify-center items-center rounded-[60px]"
            onClick={handleHamburgerToggle}>
            <a href="#Contact">Contact</a>
          </li>

          <div className="flex gap-4 mt-12">
            <button
              onClick={handleLangageToggleEN}
              className={`${locale === "en" ? "text-accent" : "text-text"}`}>
              EN
            </button>
            <button
              onClick={handleLangageToggleFR}
              className={`${locale === "fr" ? "text-accent" : "text-text"}`}>
              FR
            </button>
          </div>
        </ul>
      </nav>
      <div className="header-container flex justify-center items-center fixed top-6 left-0 right-0 gap-36 max-lg:hidden z-10">
        <div className="flex gap-4 language-switcher text-xl font-bold">
          <button
            onClick={handleLangageToggleEN}
            className={`${locale === "en" ? "text-accent" : "text-text"}`}>
            EN
          </button>
          <button
            onClick={handleLangageToggleFR}
            className={`${locale === "fr" ? "text-accent" : "text-text"}`}>
            FR
          </button>
        </div>

        <nav className="navpc p-4 text-[#e7ebf3] dark:text-text">
          <ul className="flex gap-16 bg-secondary border-solid border-[#404040]/5 box-shadow-nav rounded-[60px] w-fit justify-center items-center py-2 px-6 text-xl">
            <li className="h-12 w-24 flex justify-center items-center rounded-[60px]">
              <a href="#Home">Home</a>
            </li>
            <li className="h-12 w-24 flex justify-center items-center rounded-[60px]">
              <a href="#About">About</a>
            </li>
            <li className="h-12 w-24 flex justify-center items-center rounded-[60px]">
              <a href="#Works">Works</a>
            </li>
            <li className="h-12 w-24 flex justify-center items-center rounded-[60px] bg-accent">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>

        <label className="mr-12 flex justify-center items-center bg-secondary rounded-full p-2.5">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeToggle}
            className="appearance-none"
          />
          <div className="flex justify-center gap-6 items-center">
            {darkMode ? (
              <>
                <img
                  src={moon_inactive}
                  alt=""
                  className="h-8 w-8 max-w-none"
                />
                <img src={sun_active} alt="" className="h-8 w-8 max-w-none" />
              </>
            ) : (
              <>
                <img src={moon_active} alt="" className="h-8 w-8 max-w-none" />
                <img src={sun_inactive} alt="" className="h-8 w-8 max-w-none" />
              </>
            )}
          </div>
        </label>
      </div>
    </>
  );
};

export default Navbar;

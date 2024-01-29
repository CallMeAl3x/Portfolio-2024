// Navbar.js
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { useLanguage } from "../LanguageContext";
import sun_active from "/sun_active.svg";
import sun_inactive from "/sun_inactive.svg";
import moon_active from "/moon_active.svg";
import moon_inactive from "/moon_inactive.svg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [backgroundStyle, setBackgroundStyle] = useState({
    left: "24px",
    width: "96px",
  });
  // Au début mettre le background sur le premier élément
  const [lastActiveSection, setLastActiveSection] = useState(null);

  useEffect(() => {
    const updateBackgroundStyle = () => {
      // Recherche de l'élément actif dans la liste (avec la classe "active")
      const activeElement = document.querySelector("ul .active");
      if (activeElement) {
        // Mise à jour du style du fond en fonction de la position et de la largeur de l'élément actif
        setBackgroundStyle({
          left: `${activeElement.offsetLeft}px`,
          width: `96px`,
        });
      }
    };

    updateBackgroundStyle();
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      let newActiveSection = "Home";
      console.log(currentScrollY);
      let scrollSectionMap;

      if (window.innerWidth >= 360) {
        scrollSectionMap = {
          0: "Home",
          830: "Works",
          3500: "About",
          4300: "Contact",
        }
      } else if (window.innerWidth >= 768) {
        scrollSectionMap = {
          0: "Home",
          800: "Works",
          5800: "About",
          6400: "Contact",
        };
      }

      for (const scrollY in scrollSectionMap) {
        if (currentScrollY >= scrollY) {
          newActiveSection = scrollSectionMap[scrollY];
        } else {
          break; // Sortir de la boucle dès que la première correspondance est trouvée
        }
      }

      if (newActiveSection !== activeSection) {
        setLastActiveSection(activeSection);
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const getAnimationClass = (section) => {
    const sections = ["Home", "Works", "About", "Contact"];
    const currentIndex = sections.indexOf(section);
    const lastIndex = sections.indexOf(lastActiveSection);

    if (currentIndex > lastIndex) {
      return "animate-slide-right";
    } else {
      return "animate-slide-left";
    }
  };

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
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);

    // Nettoyage : Supprime l'écouteur d'événements lors du démontage du composant
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]); // Ajoute isOpen comme dépendance pour que le useEffect se mette à jour avec son état

  const handleHamburgerToggle = () => {
    if (window.innerWidth <= 1024) {
      setIsOpen(!isOpen);
      document.body.style.overflow = !isOpen ? "hidden" : "auto";
    }
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
        className={`lg:hidden fixed top-0 left-0 h-screen w-screen transform gradient-nav-light dark:gradient-nav-dark box-shadow-nav z-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}>
        <ul className="flex flex-col items-center justify-center text-2xl font-semibold h-full w-full py-2 px-6 gap-16">
          {[
            ["Home", "#home"],
            ["Works", "#works"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([text, href]) => (
            <li
              key={text}
              className={`"text-2xl flex justify-center items-center text-text font-semibold" ${
                activeSection === text ? "active_mobile" : ""
              }`}
              onClick={handleHamburgerToggle}>
              <a href={href}>{text}</a>
            </li>
          ))}
          <div className="flex gap-4 mt-12 text-2xl font-semibold">
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
      <div className="header-container flex justify-center items-center fixed top-6 left-0 right-0 gap-36 max-lg:hidden z-10 animate__animated animate__slideInDown">
        <div className="flex gap-4 language-switcher text-xl font-bold bg-secondary rounded-xl p-2">
          <button
            onClick={handleLangageToggleEN}
            className={`${
              locale === "en" ? "text-accent" : "text-background dark:text-text"
            }`}>
            EN
          </button>
          <button
            onClick={handleLangageToggleFR}
            className={`${
              locale === "fr" ? "text-accent" : "text-background dark:text-text"
            }`}>
            FR
          </button>
        </div>

        <nav className="navpc p-4 text-[#e7ebf3] dark:text-text animate__animated animate__slideInDown z-[9999]">
          <ul className="relative flex gap-16 bg-secondary border-solid border-[#404040]/5 box-shadow-nav z-[9999] rounded-[60px] w-fit justify-center items-center py-2 px-6 text-xl">
            <div className="menu-background" style={backgroundStyle}></div>
            {[
              ["Home", "#home"],
              ["Works", "#works"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([text, href]) => (
              <li
                key={text}
                className={`h-12 w-24 flex justify-center items-center rounded-[60px] relative overflow-hidden ${
                  activeSection === text
                    ? "active " + getAnimationClass(text)
                    : ""
                }`}>
                <a className="z-[2]" href={href}>
                  {text}
                </a>
              </li>
            ))}
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

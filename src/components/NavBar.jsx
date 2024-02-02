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
          4300: "Skills",
          5800: "Contact",
        };
      } else if (window.innerWidth >= 768) {
        scrollSectionMap = {
          0: "Home",
          800: "Works",
          5800: "About",
          6400: "Skills",
          8500: "Contact",
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
      <div className="fixed left-0 top-0 z-[11] flex w-screen items-center justify-between">
        <svg
          className={`ham hamRotate ham1 relative z-10 lg:hidden ${
            isOpen ? "active" : ""
          }`}
          viewBox="0 0 100 100"
          width="80"
          onClick={handleHamburgerToggle}
        >
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
        <label className="mr-12 flex items-center justify-center rounded-full bg-[#0D1224] p-2.5 lg:hidden">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeToggle}
            className="appearance-none"
          />
          <div className="flex items-center justify-center gap-6">
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
        className={`gradient-nav-light dark:gradient-nav-dark box-shadow-nav fixed left-0 top-0 z-10 h-screen w-screen transform lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <ul className="flex h-full w-full flex-col items-center justify-center gap-16 px-6 py-2 text-3xl font-semibold">
          {[
            ["Home", "#home"],
            ["Works", "#works"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([text, href]) => (
            <li
              key={text}
              className={`"text-3xl font-semibold" flex items-center justify-center text-text ${
                activeSection === text ? "active_mobile" : ""
              }`}
              onClick={handleHamburgerToggle}
            >
              <a href={href}>{text}</a>
            </li>
          ))}
          <div className="mt-12 flex gap-4 text-3xl font-semibold">
            <button
              onClick={handleLangageToggleEN}
              className={`${locale === "en" ? "text-accent" : "text-text"}`}
            >
              EN
            </button>
            <button
              onClick={handleLangageToggleFR}
              className={`${locale === "fr" ? "text-accent" : "text-text"}`}
            >
              FR
            </button>
          </div>
        </ul>
      </nav>
      <div className="header-container animate__animated animate__slideInDown fixed left-0 right-0 top-6 z-10 flex items-center justify-center max-lg:hidden lg:gap-6 xl:gap-24">
        <div className="language-switcher flex gap-4 rounded-xl bg-secondary p-2 text-xl font-bold">
          <button
            onClick={handleLangageToggleEN}
            className={`${
              locale === "en" ? "text-accent" : "text-background dark:text-text"
            }`}
          >
            EN
          </button>
          <button
            onClick={handleLangageToggleFR}
            className={`${
              locale === "fr" ? "text-accent" : "text-background dark:text-text"
            }`}
          >
            FR
          </button>
        </div>

        <nav className="navpc animate__animated animate__slideInDown z-[9999] p-4 text-[#e7ebf3] dark:text-text">
          <ul className="box-shadow-nav relative z-[9999] flex w-fit items-center justify-center gap-8 rounded-[60px] border-solid border-[#404040]/5 bg-secondary px-6 py-2 text-xl xl:gap-16">
            <div className="menu-background" style={backgroundStyle}></div>
            {[
              ["Home", "#home"],
              ["Works", "#works"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Contact", "#contact"],
            ].map(([text, href]) => (
              <li
                key={text}
                className={`relative flex h-12 w-24 items-center justify-center overflow-hidden rounded-[60px] ${
                  activeSection === text
                    ? "active " + getAnimationClass(text)
                    : ""
                }`}
              >
                <a className="z-[2]" href={href}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <label className="flex items-center justify-center rounded-full bg-secondary p-2.5 xl:mr-12">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeToggle}
            className="appearance-none"
          />
          <div className="flex items-center justify-center gap-6">
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

import { useContext } from "react";
import messagesFr from "./translations/fr.json";
import messagesEn from "./translations/en.json";
import { IntlProvider } from "react-intl";
import { DarkModeContext } from "./DarkModeContext";
import { useLanguage } from "./LanguageContext";
import Footer from "./components/Footer";
import Works from "./components/Works";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { locale } = useLanguage(); // Utilise le hook pour accéder à la langue actuelle

  return (
    <div
      className={`${darkMode ? "" : "dark"} bg-background dark:bg-background`}
    >
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Navbar />
        <Hero />
        <Works />
        <About />
        <Skills />
        <Footer />
      </IntlProvider>
    </div>
  );
};

export default App;

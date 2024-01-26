import { useContext } from "react";
import Navbar from "./components/NavBar";
import messagesFr from "./translations/fr.json";
import messagesEn from "./translations/en.json";
import { IntlProvider } from "react-intl";
import { DarkModeContext } from "./DarkModeContext";
import { useLanguage } from "./LanguageContext";
import Hero from "./Hero";
import "./styles/App.css";
import Works from "./Works";
import Footer from "./Footer";

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { locale } = useLanguage(); // Utilise le hook pour accéder à la langue actuelle

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Navbar />
        <Hero />
        <Works />
        <Footer />
      </IntlProvider>
    </div>
  );
};
export default App;

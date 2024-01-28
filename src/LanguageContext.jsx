import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);

// eslint-disable-next-line react/prop-types
export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(navigator.language.split(/[-_]/)[0]); // Langue par défaut

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

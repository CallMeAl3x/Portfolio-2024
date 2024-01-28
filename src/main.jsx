import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "animate.css";
import { DarkModeProvider } from "./DarkModeContext.jsx";
import { LanguageProvider } from "./LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </DarkModeProvider>
  </React.StrictMode>
);

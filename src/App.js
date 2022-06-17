import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t("title")}</h1>

        <button onClick={() => i18n.changeLanguage("en")} className="App-link">
          {t("english")}
        </button>
        <button onClick={() => i18n.changeLanguage("es")} className="App-link">
          {t("spanish")}
        </button>
      </header>
    </div>
  );
}

export default App;

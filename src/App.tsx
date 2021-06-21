import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import Content from "./Content";
import { useTranslation, initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    // backend: {
    //   loadPath: "/locales/{{lng}}/{{ns}}.json",
    // },
    // resources: {
    //   en: {
    //     translation: {
    //       sayHi: "Hi Mr. Dell(React Developer)! {{count}}",
    //       sayHi_plural:
    //         "Hi Mr. Dell(React Developer)! count is  already {{count}}",
    //       sayHi_elso: "Hi this is the first Context",
    //       secondSentence: "Hi this is the <1>second</1> sentence",
    //       sentence3: "This is the 3. sentence {{text,alakitas}}",
    //     },
    //   },
    //   hu: {
    //     translation: {
    //       sayHi: "Szia Danika! {{count}}",
    //       sayHi_plural: "Szia Danika! a szám már {{count}}",
    //       sayHi_elso: "Szia ez az első Context",
    //       secondSentence: "Hello ez a  <1>második</1> mondat",
    //       sentence3: "Ez a 3. mondat {{text,alakitas}}",
    //     },
    //   },
    // },
    // lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,

      format: (value, format, lng) => {
        if (format === "alakitas") return value + " ezt hozzáadtam";
        return value;
      },
    },
  });

function App() {
  return (
    <Suspense fallback="...is loading">
      <Content />
    </Suspense>
  );
}

export default App;

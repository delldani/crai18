import React from "react";

import { useTranslation, Trans } from "react-i18next";

export interface ContentProps {}

const Content: React.FC<ContentProps> = () => {
  const [value, setValue] = React.useState<number>(1);

  const { t, i18n } = useTranslation();
  const onClick = () => {
    i18n.changeLanguage(i18n.language === "en" ? "hu" : "en");
  };

  const onChange = (e: any) => {
    const value = parseInt(e.target.value);
    setValue(value);
  };

  return (
    <div>
      <h3>{t("sayHi", { count: value })}</h3>
      <h3> {t("sayHi", { context: "elso", count: value })}</h3>
      <h3> {t("sentence3", { text: "haliho" })}</h3>
      <Trans i18nKey="secondSentence">
        Halihó ez a <strong>második</strong> mondat
      </Trans>
      <br />
      <button onClick={onClick}>Change language</button>
      <br />
      <select name="numbers" onChange={onChange} value={value}>
        <option value={1}>-1-</option>
        <option value={2}>-2-</option>
        <option value={3}>-3-</option>
      </select>
    </div>
  );
};

export default Content;

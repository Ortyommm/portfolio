import React from "react";
import * as styles from "./LanguageSelector.module.scss";
import { navigate } from "gatsby";
import isBrowser from "../../helpers/isBrowser";
import { Languages } from "../../types";
import fromEnToRuPath from "../../helpers/fromEnToRuPath";

export default function LanguageSelector({ lang }: { lang: Languages }) {
  let isEn: boolean | undefined;
  let currentImage: string | undefined;
  isEn = lang === "en";

  currentImage = isEn
    ? "/images/icons/us-flag.svg"
    : "/images/icons/russia-flag.svg";

  function onSelectorClick() {
    if (!isBrowser()) return;
    let url = "";
    if (isEn) {
      localStorage.setItem("language", "ru");
      url = fromEnToRuPath(window.location.pathname);
    } else {
      localStorage.setItem("language", "en");
      if (window.location.pathname === "/") url = "/en";
      else url = "/en" + window.location.pathname;
    }
    navigate(url, { replace: true });
  }

  return (
    <div className={styles.language_container}>
      <img src={currentImage} alt={lang} onClick={onSelectorClick} />
    </div>
  );
}

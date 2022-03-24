import * as React from "react";
import { Link, navigate } from "gatsby";
import Preloader from "../components/Preloader/Preloader";
import {
  getLocaleByNavigator,
  getLocaleByPathName,
  isValidLanguage,
} from "../helpers/getLocale";
import isBrowser from "../helpers/isBrowser";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  if (isBrowser()) {
    //Navigate user to his page
    const languageInLocalStorage = localStorage.getItem("language");
    if (isValidLanguage(languageInLocalStorage)) {
      navigate(languageInLocalStorage === "ru" ? "/" : "/en");
    } else {
      const locale = getLocaleByNavigator();
      navigate(locale === "ru" ? "/" : "/en");
    }
  }

  return <Preloader />;
};

export default NotFoundPage;

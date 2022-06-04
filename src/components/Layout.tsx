import React, { useState } from "react";
import { ReactNode } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { getLocaleByNavigator, isValidLanguage } from "../helpers/getLocale";
import { navigate } from "gatsby";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import isBrowser from "../helpers/isBrowser";
import { Languages } from "../types";
import { Helmet } from "react-helmet";
import locales from "../data/locales";
import fromEnToRuPath from "../helpers/fromEnToRuPath";
export default function Layout({
  children,
  lang,
}: {
  children: ReactNode;
  lang: Languages;
}) {
  if (isBrowser()) {
    const locale = getLocaleByNavigator();
    const languageInLocalStorage = localStorage.getItem("language");
    if (
      !isValidLanguage(languageInLocalStorage) &&
      locale === "en" &&
      !window.location.pathname.startsWith("/en")
    ) {
      navigate("/en" + window.location.pathname, { replace: true });
    } else if (isValidLanguage(languageInLocalStorage)) {
      if (
        languageInLocalStorage === "ru" &&
        window.location.pathname.startsWith("/en")
      ) {
        navigate(fromEnToRuPath(window.location.pathname), { replace: true });
      } else if (
        languageInLocalStorage === "en" &&
        !window.location.pathname.startsWith("/en")
      ) {
        navigate("/en" + window.location.pathname, { replace: true });
      }
    }
  }

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: lang,
        }}
      >
        <meta name="description" content={locales[lang].meta.description} />
        <meta
          property="og:image"
          content="https://artemdev.com/images/other/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://artemdev.com${lang === "en" ? "/en" : ""}`}
        />
        <meta property="og:title" content="Artemdev.com" />
        <meta
          property="og:description"
          content={locales[lang].meta.description}
        />
      </Helmet>
      <div className="page">
        <Sidebar lang={lang} />
        <LanguageSelector lang={lang} />
        <div className="container">{children}</div>
      </div>
    </>
  );
}

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
export default function Layout({
  children,
  lang,
}: {
  children: ReactNode;
  lang: Languages;
}) {
  if (isBrowser()) {
    const locale = getLocaleByNavigator();
    if (
      !isValidLanguage(localStorage.getItem("language")) &&
      locale === "en" &&
      !window.location.pathname.startsWith("/en")
    ) {
      navigate("/en");
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
      </Helmet>
      <div className="page">
        <Sidebar lang={lang} />
        <LanguageSelector lang={lang} />
        <div className="container">{children}</div>
      </div>
    </>
  );
}

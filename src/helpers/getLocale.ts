export function getLocaleByPathName() {
  const languageInLocalStorage = localStorage.getItem("language");
  if (languageInLocalStorage && isValidLanguage(languageInLocalStorage)) {
    return languageInLocalStorage;
  }
  const isEn = window.location.pathname.startsWith("/en");
  return isEn ? "en" : "ru";
}

export function getLocaleByNavigator() {
  const isRu =
    window.navigator.language === "ru-RU" ||
    window.navigator.languages.includes("ru");
  return isRu ? "ru" : "en";
}

export function isValidLanguage(lang: string | null) {
  if (!lang) return;
  return ["ru", "en"].includes(lang);
}

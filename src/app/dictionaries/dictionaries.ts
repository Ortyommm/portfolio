import "server-only";

const dictionaries = {
  en: () =>
    import("@/app/dictionaries/en.json").then((module) => module.default),
  ru: () =>
    import("@/app/dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "ru") =>
  dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

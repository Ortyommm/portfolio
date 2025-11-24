"use client";
import React from "react";
import styles from "./LanguageSelector.module.scss";
import Image from "next/image";
import { SupportedLanguages } from "@/types/globalTypes";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export function LanguageSelector({ lang }: { lang: SupportedLanguages }) {
  const router = useRouter();
  const pathname = usePathname();
  const isEn = lang === "en";

  const currentImage = isEn
    ? "/icons/common/us-flag.svg"
    : "/icons/common/russia-flag.svg";

  async function onSelectorClick() {
    const redirectLocale = isEn ? "ru" : "en";
    if (pathname.startsWith("/en") || pathname.startsWith("/ru")) {
      const pathnameWithoutLocale = pathname.split("/").slice(2).join("/");
      return router.push(`/${redirectLocale}/${pathnameWithoutLocale}`);
    }
    return router.push(`${redirectLocale}/${pathname}`);
  }

  return (
    <div className={styles.language_container}>
      <div className={styles.image_wrapper}>
        <Image
          fill={true}
          src={currentImage}
          alt={lang}
          onClick={onSelectorClick}
        />
      </div>
    </div>
  );
}

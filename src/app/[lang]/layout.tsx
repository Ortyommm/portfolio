import type { Metadata } from "next";
import "../globals.scss";
import styles from "./layout.module.scss";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import { Sidebar } from "@/app/[lang]/components/Sidebar/Sidebar";
import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import { LanguageSelector } from "@/app/[lang]/components/LanguageSelector/LanguageSelector";
import Script from "next/script";
import { SupportedLanguages } from "@/types/globalTypes";
import { redirect } from "next/navigation";

const montserrat = Montserrat({});

type Props = {
  params: Promise<{ lang: SupportedLanguages }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang); // en

  return {
    title: "Artemdev",
    openGraph: {
      images: "https://artemdev.com/images/other/og-image.png",
      type: "website",
      url: `https://artemdev.com${lang === "en" ? "/en" : ""}`,
      title: "Artemdev",
    },
    description: dict.meta.description,
  };
}

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!(['ru', 'en'].includes(lang))) {
    return redirect('/')
  }


  return (
    <html lang={lang} className={montserrat.className}>
      <body>
        <div className={styles.page}>
          <Sidebar lang={lang as SupportedLanguages} />
          <LanguageSelector lang={lang as SupportedLanguages} />
          <div className={styles.container}>{children}</div>
        </div>

        {/*Yandex.Metrika counter*/}
        <Script id={"metrika"} type="text/javascript">
          {`
              (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');
    
              ym(98214577, 'init', {clickmap:true, accurateTrackBounce:true, trackLinks:true});
            `}
        </Script>
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mc.yandex.ru/watch/98214577"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {/*Yandex.Metrika counter*/}
      </body>
    </html>
  );
}

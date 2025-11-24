import { DefaultParams } from "@/types/globalTypes";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import {
  githubLink,
  gmailLink,
  habrLink,
  telegramLink,
  youtubeLink,
} from "@/consts/links";
import { BottomLink } from "@/app/[lang]/components/BottomLink/BottomLink";
import { ContactItems } from "@/app/[lang]/contact/components/ContactItems/ContactItems";
import TelegramIcon from "@image/icons/contacts/telegram.svg";
import GmailIcon from "@image/icons/contacts/gmail.svg";
import GithubIcon from "@image/icons/contacts/github.svg";
import YoutubeIcon from "@image/icons/contacts/youtube.svg";
import HabrIcon from "@image/icons/contacts/habr.svg";
import { Heading } from "@/app/[lang]/components/Typography/Heading/Heading";

export default async function Page({ params }: { params: DefaultParams }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const contactText = dict.contacts;

  const contactItems = [
    {
      href: telegramLink,
      icon: TelegramIcon,
      title: "Telegram",
    },
    {
      href: gmailLink,
      title: "Gmail",
      icon: GmailIcon,
    },
    {
      href: githubLink,
      title: "Github",
      icon: GithubIcon,
    },
    {
      href: youtubeLink,
      title: "Youtube",
      icon: YoutubeIcon,
    },
    /*{
            href: codeWarsLink,
            title: "Codewars",
            icon: CodeWarsIcon,
        },*/
    {
      href: habrLink,
      title: "Habr",
      icon: HabrIcon,
    },
  ];

  return (
    <>
      <Heading type={"h1"}>{contactText.title}</Heading>
      <ContactItems contactsData={contactItems} />
      <BottomLink to="/videos" title={dict.bottomLinks.videos} lang={lang} />
    </>
  );
}

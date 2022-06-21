import * as cl from "./Contact.module.scss";
import React, { FormEvent, useState } from "react";
import Paragraph from "../../components/Typography/Paragraph";
import { Icon } from "@iconify/react";
import telegramFill from "@iconify/icons-akar-icons/telegram-fill";
import {
  codeWarsLink,
  githubLink,
  gmailLink,
  habrLink,
  telegramLink,
  vkLink,
  youtubeLink,
} from "../../config";
import vkFill from "@iconify/icons-akar-icons/vk-fill";
import ContactItems from "./ContactItems";
import githubFill from "@iconify/icons-akar-icons/github-fill";
import Layout from "../../components/Layout";
import BottomLink from "../../components/BottomLink/BottomLink";
import { Languages } from "../../types";
import locales from "../../data/locales";
import {
  CodeWarsIcon,
  GithubIcon,
  GmailIcon,
  HabrIcon,
  TelegramIcon,
  VkIcon,
  YoutubeIcon,
} from "../Icons/Icons";

export default function Contact({ lang }: { lang: Languages }) {
  const contactText = locales[lang].contacts;

  const contactItems = [
    {
      href: telegramLink,
      icon: TelegramIcon,
      title: "Telegram",
    },
    {
      href: vkLink,
      icon: VkIcon,
      title: "VK",
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
    {
      href: codeWarsLink,
      title: "Codewars",
      icon: CodeWarsIcon,
    },
    {
      href: habrLink,
      title: "Habr",
      icon: HabrIcon,
    },
  ];

  return (
    <Layout lang={lang}>
      <h1>{contactText.title}</h1>
      <ContactItems contactsData={contactItems} />
      <BottomLink
        to="/videos"
        title={locales[lang].bottomLinks.videos}
        lang={lang}
      />
    </Layout>
  );
}

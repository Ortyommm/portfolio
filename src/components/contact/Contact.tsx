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

export default function Contact({ lang }: { lang: Languages }) {
  const contactText = locales[lang].contacts;

  const contactItems = [
    {
      href: telegramLink,
      icon: telegramFill,
      title: "Telegram",
    },
    {
      href: vkLink,
      icon: vkFill,
      title: "VK",
    },
    {
      href: gmailLink,
      title: "Gmail",
      icon: "simple-icons:gmail",
    },
    {
      href: githubLink,
      title: "Github",
      icon: githubFill,
    },
    {
      href: youtubeLink,
      title: "Youtube",
      icon: "akar-icons:youtube-fill",
    },
    {
      href: codeWarsLink,
      title: "Codewars",
      icon: "cib:codewars",
    },
    {
      href: habrLink,
      title: "Habr",
      icon: "simple-icons:habr",
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

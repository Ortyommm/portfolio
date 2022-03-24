import { IconifyIcon } from "@iconify/react";
import React from "react";
import ContactItem from "./ContactItem";

export default function ContactItems({
  contactsData = [],
}: {
  contactsData: { icon: IconifyIcon | string; href: string; title: string }[];
}) {
  const contactEls = [];
  for (const contactData of contactsData) {
    contactEls.push(
      <ContactItem
        key={contactData.href}
        href={contactData.href}
        icon={contactData.icon}
        title={contactData.title}
      />
    );
  }

  return <>{contactEls}</>;
}

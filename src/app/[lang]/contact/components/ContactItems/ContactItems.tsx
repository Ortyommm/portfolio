import React, { FC } from "react";
import { ContactItem } from "./components/ContactItem/ContactItem";

export function ContactItems({
  contactsData = [],
}: {
  contactsData: { icon: FC; href: string; title: string }[];
}) {
  const contactEls = [];
  for (const contactData of contactsData) {
    contactEls.push(
      <ContactItem
        key={contactData.href}
        href={contactData.href}
        icon={contactData.icon}
        title={contactData.title}
      />,
    );
  }

  return <>{contactEls}</>;
}

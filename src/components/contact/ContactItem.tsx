import * as cl from "./Contact.module.scss";
import { Icon, IconifyIcon } from "@iconify/react";
import Paragraph from "../../components/Typography/Paragraph";
import React from "react";

export default function ContactItem({
  icon,
  href,
  title,
}: {
  icon: IconifyIcon | string;
  href: string;
  title: string;
}) {
  return (
    <Paragraph className={cl.contact_item}>
      <a className="ordinary_link" href={href} target="_blank">
        <Icon icon={icon} />
        {title}
      </a>
    </Paragraph>
  );
}

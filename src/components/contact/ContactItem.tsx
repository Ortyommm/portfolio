import * as cl from "./Contact.module.scss";
import { Icon, IconifyIcon } from "@iconify/react";
import Paragraph from "../../components/Typography/Paragraph";
import React, { ReactElement } from "react";
import IconSvg from "../Icons/IconSvg";

export default function ContactItem({
  icon,
  href,
  title,
}: {
  icon: ReactElement;
  href: string;
  title: string;
}) {
  return (
    <Paragraph className={cl.contact_item}>
      <a className="ordinary_link" href={href} target="_blank">
        <IconSvg>{icon}</IconSvg>
        {title}
      </a>
    </Paragraph>
  );
}

import { Icon } from "@iconify/react";
import baselineArrowForward from "@iconify/icons-ic/baseline-arrow-forward";
import { Link } from "gatsby";
import React from "react";
import { Languages } from "../../types";

export default function BottomLink({
  to,
  title,
  lang,
}: {
  to: string;
  title: string;
  lang: Languages;
}) {
  const link = lang === "en" ? `/en/${to.replace(/\//g, "")}` : to;
  return (
    <div style={{ padding: "30px 0" }}>
      <Link to={link} className="link">
        <span>{title}</span>
        <Icon icon={baselineArrowForward} />
      </Link>
    </div>
  );
}

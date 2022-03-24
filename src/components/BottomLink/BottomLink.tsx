import { Icon } from "@iconify/react";
import baselineArrowForward from "@iconify/icons-ic/baseline-arrow-forward";
import { Link } from "gatsby";
import React from "react";

export default function BottomLink({
  to,
  title,
}: {
  to: string;
  title: string;
}) {
  return (
    <div style={{ padding: "30px 0" }}>
      <Link to={to} className="link">
        <span>{title}</span>
        <Icon icon={baselineArrowForward} />
      </Link>
    </div>
  );
}

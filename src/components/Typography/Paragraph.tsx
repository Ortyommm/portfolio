import React from "react";
import { ReactNode } from "react";

export default function Paragraph({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`paragraph ${className}`} {...rest}>
      {children}
    </div>
  );
}

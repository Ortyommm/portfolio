import React, {
  CSSProperties,
  PropsWithChildren,
  PropsWithoutRef,
  ReactElement,
  ReactPropTypes,
} from "react";
import { ReactNode } from "react";

export default function IconSvg({
  children,
  className,
}: {
  children: ReactElement;
  className?: string;
}) {
  if (children?.type === "svg") {
    return children;
  }

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" className={className}>
      {children}
    </svg>
  );
}
